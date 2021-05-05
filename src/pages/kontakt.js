import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Kontakt() {
    return (
        <Layout>
            <SEO
                title='Skontaktuj się z nami, jeżeli potrzebujesz druku 3D,'
                description='Jeśli potrzebujesz czegoś wydrukowanego w 3D, skontaktuj się z nami.'
                meta={[]}
            />
            <StyledHero>
                <h1>Kontakt</h1>
            </StyledHero>
            <StyledDescription>
                <p>Zamówić lub skontaktować można się poprzez:</p>
                <ul>
                    <li>maila borys@nadrukireklamowe.pl</li>
                    <li>przez wiadomość na naszym <StyledA rel='nofollow noreferrer noopener' target='_blank' href='https://www.facebook.com/balonyznadrukiem/'>facebooku</StyledA></li>
                </ul>
                <p>W wiadomości należy przesłać wszelkie informacje związane z wydrukiem, jeśli chodzi o wydruk naszego modelu, to wszystkie wymienione informacje w jego opisie, jeśli Twój model, plik modelu, link do niego, jego rysunek lub inne zasoby potrzebne do jego wykonania oraz informację, czy ma być wygładzany.</p>
                <p>Jeśli masz jakieś wątpliwości, zawsze służymy pomocą i doradzamy w doborze materiału.</p>
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
    margin-bottom: 4rem;
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

const StyledA = styled.a`
    color: #3459eb;
    font-weight: 700;
    transition: color 300ms ease-in-out;

    &:visited {
        color: #3459eb;
    }

    &:hover, &:focus {
        color: #3471eb;
    }
`