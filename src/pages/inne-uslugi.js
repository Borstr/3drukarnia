import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Kontakt() {
    return (
        <Layout>
            <SEO
                title='Inne usługi, które oferujemy.'
                description='Nasze usługi oprócz druku 3D - druk na gadżetach.'
                meta={[
                    { name: 'robots', content: 'noindex follow' }
                ]}
            />
            <StyledHero>
                <h1>Inne usługi</h1>
            </StyledHero>
            <StyledDescription>
                <h2>Nadruki na ubraniach i gadżetach</h2>
                <p>Jeśli potrzebujesz koszulek, bluz, długopisów, czy wielu innych gadżetów z nadrukiem, koniecznie sprawdź stronę <StyledA rel='noopener noreferrer' target='_blank' href='https://www.nadrukireklamowe.com.pl'>nadrukireklamowe.com.pl</StyledA>.</p>
                <h2>Nadruki na gadżetach odblaskowych</h2>
                <p>Jeżeli natomiast potrzebujesz gadżetów odblaskowych z nadrukiem, sprawdź naszą stronę <StyledA rel='noopener noreferrer' target='_blank' href='https://www.kamizelkaodblaskowa.pl'>kamizelkaodblaskowa.pl</StyledA>.</p>
            </StyledDescription>
        </Layout>
    )
}

const StyledHero = styled.header`
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
    margin: 2.7rem auto;
    
    &:last-child {
        margin-bottom: 3rem;
    }

    @media(max-width: 1112px) {
        padding: 0 1rem;
    }
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