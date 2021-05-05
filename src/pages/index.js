import * as React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES } from '@contentful/rich-text-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/Button'

export const query = graphql`
    {
        contentfulIndex {
                heroTitle
                heroSubtitle
                heroSubtitle2
                heroSubtitle3
                cta
                firstSectionTitle
                secondSectionTitle
                secondSectionDescription {
                raw
            }
                thirdSectionTitle
                thirdSectionDescription {
                __typename
                raw
            }
                fourthSectionTitle
                firstSectionDescription {
                raw
            }
            exampleModels {
              alt
              title
              image {
                fixed(quality: 50, height: 200) {
                    ...GatsbyContentfulFixed
                    ...GatsbyContentfulFixed_tracedSVG
                }
              }
            }
            heroImage {
                fluid(quality: 10) {
                    ...GatsbyContentfulFluid
                    ...GatsbyContentfulFluid_tracedSVG
                }
            }
        }
    }  
`

export default function IndexPage({ 
    data: { 
        contentfulIndex: {
            pageTitle, 
            pageDescription,
            heroTitle,
            heroSubtitle,
            heroSubtitle2,
            heroSubtitle3,
            cta,
            heroImage: {
                fluid: heroImageFluid
            },
            firstSectionTitle,
            firstSectionDescription,
            secondSectionTitle,
            secondSectionDescription,
            thirdSectionTitle,
            thirdSectionDescription,
            fourthSectionTitle,
            exampleModels
        } 
    } 
}) {

    const renderOptions = {
        renderNode: {
            [INLINES.HYPERLINK]: ({ 
                data, 
                content: [
                    { value }
                ]
            }) => <StyledA rel='nofollow noreferrer noopener' target='_blank' href={data}>{value}</StyledA>
        }
    }

    return (
        <Layout>
            <SEO 
                title={pageTitle} 
                description={pageDescription}
                meta={[ 
                    
                ]}
            />
            <StyledHero>
                <div>
                    <h1>{heroTitle}</h1>
                    <StyledSubheading>
                        {heroSubtitle}<br/> 
                        {heroSubtitle2}<br/> 
                        {heroSubtitle3}
                    </StyledSubheading>
                    <Button type='link' to='#oferta'>{cta}</Button>
                </div>
                <StyledHeroImage fluid={heroImageFluid} />
            </StyledHero>
            <StyledDescription>
                <h2>{firstSectionTitle}</h2>
                {renderRichText(firstSectionDescription, renderOptions)}
            </StyledDescription>
            <StyledDescription>
                <h2>{secondSectionTitle}</h2>
                {renderRichText(secondSectionDescription, renderOptions)}
            </StyledDescription>
            <StyledDescription>
                <StyledSpan id='oferta'/>
                <h2>{thirdSectionTitle}</h2>
                {renderRichText(thirdSectionDescription, renderOptions)}
            </StyledDescription>
            <StyledDescription>
                <h2>{fourthSectionTitle}</h2>
                <StyledList>
                    {exampleModels.map(({
                        alt,
                        title,
                        image: {
                            fixed
                        }
                    }, i) => 
                        <ModelContainer key={i}>
                            <Img fixed={fixed} alt={alt}/>
                            <ProductTitle>{title}</ProductTitle>
                        </ModelContainer>    
                    )}
                </StyledList>
                <p>Więcej można znaleźć w <StyledLink to='/galeria/'>galerii</StyledLink> oraz <StyledLink to='/modele/'>naszych modelach</StyledLink>.</p>
            </StyledDescription>
        </Layout>
    )
}

const StyledHero = styled.header`
    height: 100vh;
    max-width: 1080px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & div:first-child {
        width: 75%;
    }

    @media(max-width: 1112px) {
        padding: 0 1rem;
    }

    @media(max-width: 700px) {
        & div:first-child {
            width: 100%;
            z-index: 2;
        }
    }
`

const StyledHeroImage = styled(Img)`
    height: 60vh;
    width: 25%;

    & img, picture {
        width: auto !important;
    }

    @media(max-width: 700px) {
        display: none;
    }
`

const StyledSubheading = styled.h2`
    font-weight: 300;
    line-height: 5rem;
`

const StyledSpan = styled.span`
    position: absolute;
    margin-top: -4rem;
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

const StyledLink = styled(Link)`
    color: #02A257;
    font-weight: 700;
    transition: color 300ms ease-in-out;

    &:visited {
        color: #02A257;
    }

    &:hover, &:focus {
        color: #34D58A;
    }
`

const StyledList = styled.ul`
    margin: 0;
    padding: 1rem 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
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

const ProductTitle = styled.h3`
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    margin-top: .5rem;
`

const StyledA = styled.a`
    color: #02A257;
    font-weight: 700;
    transition: color 300ms ease-in-out;

    &:visited {
        color: #02A257;
    }

    &:hover, &:focus {
        color: #34D58A;
    }
`