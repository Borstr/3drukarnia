import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
{   
    contentfulDruk3D {
        title
        firstSectionTitle
        firstSectionDescription {
        raw
        }
        secondSectionTitle
        secondSectionDescription {
        raw
        }
        thirdSectionTitle
        thirdSectionSubtitle1
        thirdSectionDescription1 {
                raw
        }
        thirdSectionSamples1 {
        fixed(quality: 50, height: 200) {
            ...GatsbyContentfulFixed
            ...GatsbyContentfulFixed_tracedSVG
        }
        }
        thirdSectionSubtitle2
        thirdSectionDescription2 {
                raw
        }
        thirdSectionSamples2 {
        fixed(quality: 50, height: 200) {
            ...GatsbyContentfulFixed
            ...GatsbyContentfulFixed_tracedSVG
        }
        }
        thirdSectionSubtitle3
        thirdSectionDescription3 {
                raw
        }
        thirdSectionSamples3 {
        fixed(quality: 50, height: 200) {
            ...GatsbyContentfulFixed
            ...GatsbyContentfulFixed_tracedSVG
        }
        }
        thirdSectionSubtitle4
        thirdSectionDescription4 {
                raw
        }
        thirdSectionSamples4 {
        fixed(quality: 50, height: 200) {
            ...GatsbyContentfulFixed
            ...GatsbyContentfulFixed_tracedSVG
        }
        }
        thirdSectionSubtitle5
        thirdSectionDescription5 {
                raw
        }
        thirdSectionSamples5 {
        fixed(quality: 50, height: 200) {
            ...GatsbyContentfulFixed
            ...GatsbyContentfulFixed_tracedSVG
        }
        }
        thirdSectionSubtitle6
        thirdSectionDescription6 {
                raw
        }
        thirdSectionSamples6 {
        fixed(quality: 50, height: 200) {
            ...GatsbyContentfulFixed
            ...GatsbyContentfulFixed_tracedSVG
        }
        }
        thirdSectionSubtitle7
        thirdSectionDescription7 {
                raw
        }
        thirdSectionSamples7 {
        fixed(quality: 50, height: 200) {
            ...GatsbyContentfulFixed
            ...GatsbyContentfulFixed_tracedSVG
        }
        }
        fourthSectionTitle
        fourthSectionDescription {
                raw
        }
        pageTitle
        pageDescription
    }
}  
`

export default function Druk3d({
    data: {
        contentfulDruk3D: {
            pageTitle,
            pageDescription,
            title,
            firstSectionTitle,
            firstSectionDescription,
            secondSectionTitle,
            secondSectionDescription,
            thirdSectionTitle,
            thirdSectionSubtitle1,
            thirdSectionDescription1,
            thirdSectionSamples1,
            thirdSectionSubtitle2,
            thirdSectionDescription2,
            thirdSectionSamples2,
            thirdSectionSubtitle3,
            thirdSectionDescription3,
            thirdSectionSamples3,
            thirdSectionSubtitle4,
            thirdSectionDescription4,
            thirdSectionSamples4,
            thirdSectionSubtitle5,
            thirdSectionDescription5,
            thirdSectionSamples5,
            thirdSectionSubtitle6,
            thirdSectionDescription6,
            thirdSectionSamples6,
            thirdSectionSubtitle7,
            thirdSectionDescription7,
            thirdSectionSamples7,
            fourthSectionTitle,
            fourthSectionDescription
        }
    }
}) {
    return ( 
        <Layout >
            <SEO
                title={pageTitle}
                description={pageDescription}
                meta={[]}
            />
            <StyledHero>
                <h1>{title}</h1>
            </StyledHero>
            <StyledDescription>
                <h2>{firstSectionTitle}</h2>
                {renderRichText(firstSectionDescription)}
            </StyledDescription>
            <StyledDescription>
                <h2>{secondSectionTitle}</h2>
                {renderRichText(secondSectionDescription)}
            </StyledDescription>
            <StyledDescription>
                <h2>{thirdSectionTitle}</h2>
                <h3>{thirdSectionSubtitle1}</h3>
                {renderRichText(thirdSectionDescription1)}
                <StyledList>
                    {thirdSectionSamples1.map((sample, i) =>
                        <ModelContainer key={i}>
                            <Img fixed={sample.fixed} alt='' />
                        </ModelContainer>
                    )}
                </StyledList>
                <h3>{thirdSectionSubtitle2}</h3>
                {renderRichText(thirdSectionDescription2)}
                <StyledList>
                    {thirdSectionSamples2.map((sample, i) =>
                        <ModelContainer key={i}>
                            <Img fixed={sample.fixed} alt='' />
                        </ModelContainer>
                    )}
                </StyledList>
                <h3>{thirdSectionSubtitle3}</h3>
                {renderRichText(thirdSectionDescription3)}
                <StyledList>
                    {thirdSectionSamples3.map((sample, i) =>
                        <ModelContainer key={i}>
                            <Img fixed={sample.fixed} alt='' />
                        </ModelContainer>
                    )}
                </StyledList>
                <h3>{thirdSectionSubtitle4}</h3>
                {renderRichText(thirdSectionDescription4)}
                <StyledList>
                    {thirdSectionSamples4.map((sample, i) =>
                        <ModelContainer key={i}>
                            <Img fixed={sample.fixed} alt='' />
                        </ModelContainer>
                    )}
                </StyledList>
                <h3>{thirdSectionSubtitle5}</h3>
                {renderRichText(thirdSectionDescription5)}
                <StyledList>
                    {thirdSectionSamples5.map((sample, i) =>
                        <ModelContainer key={i}>
                            <Img fixed={sample.fixed} alt='' />
                        </ModelContainer>
                    )}
                </StyledList>
                <h3>{thirdSectionSubtitle6}</h3>
                {renderRichText(thirdSectionDescription6)}
                <StyledList>
                    {thirdSectionSamples6.map((sample, i) =>
                        <ModelContainer key={i}>
                            <Img fixed={sample.fixed} alt='' />
                        </ModelContainer>
                    )}
                </StyledList>
                <h3>{thirdSectionSubtitle7}</h3>
                {renderRichText(thirdSectionDescription7)}
                <StyledList>
                    {thirdSectionSamples7.map((sample, i) =>
                        <ModelContainer key={i}>
                            <Img fixed={sample.fixed} alt='' />
                        </ModelContainer>
                    )}
                </StyledList>
            </StyledDescription>
            <StyledDescription>
                <h2>{fourthSectionTitle}</h2>
                {renderRichText(fourthSectionDescription)}
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

    & li {
        margin: .5rem;
    }

    @media(max-width: 550px) {
        & li {
            width: 100%;
        }
    }
`

const ModelContainer = styled.li`
    padding: .5rem;
    background-color: #02A257;
    width: calc((1080px - 5rem) / 4);
    box-shadow: 0 0 6px rgba(0, 0, 0, .32);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & div, picture, img {
        height: 300px;
        width: auto;
    }
`