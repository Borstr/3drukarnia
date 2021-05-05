import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Modal from '../components/modal'

export const query = graphql`
    {
        contentfulModele {
            title
            subtitle
            pageTitle
            pageDescription
            description {
                raw
            }
            models {
                alt
                title
                description {
                    raw
                }
                gallery {
                    fixed(quality: 50, height: 200) {
                        ...GatsbyContentfulFixed
                        ...GatsbyContentfulFixed_tracedSVG
                    }
                }
                image {
                    fixed(quality: 50, height: 200) {
                        ...GatsbyContentfulFixed
                        ...GatsbyContentfulFixed_tracedSVG
                    }
                }
            }
        }
    }  
`

export default function Modele({
    data: {
        contentfulModele: {
            title,
            subtitle,
            description,
            models,
            pageTitle,
            pageDescription
        }
    }
}) {
    const [ chosenModel, setModel ] = useState(0);

    return (
        <Layout>
            {console.log(pageTitle, 'title', pageDescription)}
            <SEO
                title={pageTitle}
                description={pageDescription}
                meta={[]}
            />
            <StyledHero>
                <h1>{title}</h1>
            </StyledHero>
            <StyledDescription>
                <h2>{subtitle}</h2>
                {renderRichText(description)}
                <StyledList>
                    {models.map((model, i) => 
                        <li key={i}>
                            <StyledModelBtn onClick={() => setModel(model)}>
                                <Img fixed={model.image.fixed} alt={model.alt}/>
                                <ProductTitle>{model.title}</ProductTitle>
                            </StyledModelBtn>
                        </li>
                    )}
                </StyledList>
            </StyledDescription>
            {chosenModel ? <Modal closeModal={setModel} content={chosenModel} shouldOpen={chosenModel ? true : false}/> : null}
        </Layout>
    )
}

const StyledHero = styled.header `
    min-height: 300px;
    width: 100%;
    background-color: #C0EFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    padding-top: 5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .32);
    text-align: center;
`

const StyledDescription = styled.section`
    max-width: 1080px;
    margin: 0 auto;

    @media(max-width: 1112px) {
        padding: 0 1rem;
    }
`

const StyledList = styled.ul`
    margin: 0;
    padding: 1rem 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;

    & li {
        margin: .5rem;
        width: calc((1080px - 5rem) / 4);
    }

    @media(max-width: 1112px) {
        & li {
            width: calc((100% - 3rem) / 3);
        }
    }

    @media(max-width: 800px) {
        & li {
            width: calc((100% - 2rem) / 2);
        }
    }

    @media(max-width: 550px) {
        & li {
            width: 100%;
        }
    }
`

const StyledModelBtn = styled.button`
    padding: 1rem;
    background-color: #02A257;
    width: 100%;
    box-shadow: 0 0 6px rgba(0, 0, 0, .48);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: none;
    cursor: pointer;
    height: 100%;

    & div, picture, img {
        height: auto;
        max-height: 200px;
        width: auto;
        max-width: 100%;
    }

    @media(max-width: 550px) {
        width: 100%;
    }
`

const ProductTitle = styled.h3`
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    margin-top: .5rem;
`