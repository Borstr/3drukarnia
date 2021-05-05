import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
    {
        contentfulGaleria {
            pageTitle
            pageDescription
            title
            subtitle
            description
            photos {
                alt
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

export default function Galeria({
    data: {
        contentfulGaleria: {
            pageTitle,
            pageDescription,
            title,
            subtitle,
            description,
            photos
        }
    }
}) {
    return (
        <Layout>
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
                <p>{description}</p>
                <StyledList>
                    {photos.map((photo, i) =>
                        <ModelContainer key={i}>
                            <Img fixed={photo.image.fixed} />
                        </ModelContainer>
                    )}
                </StyledList>
            </StyledDescription>
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
    flex-direction: column;
    padding: 1rem;
    padding-top: 5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .32);
    text-align: center;
`

const StyledDescription = styled.section`
    max-width: 1080px;
    margin: 0 auto;
    
    &:last-child {
        margin-bottom: 3rem;
    }

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
`

const ModelContainer = styled.li`
    padding: 1rem;
    background-color: #02A257;
    width: calc((1080px - 5rem) / 4);
    box-shadow: 0 0 6px rgba(0, 0, 0, .48);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: .5rem;

    & div, picture, img {
        height: auto;
        max-height: 200px;
        width: auto;
        max-width: 100%;
    }

    @media(max-width: 1112px) {
        width: calc((100% - 3rem) / 3);
    }

    @media(max-width: 800px) {
        width: calc((100% - 2rem) / 2);
    }

    @media(max-width: 550px) {
        width: 100%;
    }
`