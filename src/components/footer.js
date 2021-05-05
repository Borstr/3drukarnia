import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = () => 
    <StyledFooter>
        <StyledContainer>
            <StyledDescription>
                <StyledP>Zapraszamy również na nasze pozostałe strony dotyczące druku na ubraniach i gadżetach i druku na gadżetach odblaskowych oraz allegro i nasze media społecznościowe.</StyledP>
                <StyledA rel='noopener noreferrer' target='_blank' href='https://www.nadrukireklamowe.com.pl'>nadrukireklamowe.com.pl</StyledA>
                <StyledA rel='noopener noreferrer' target='_blank' href='https://www.kamizelkaodblaskowa.pl'>kamizelkaodblaskowa.pl</StyledA>
                <StyledA>allegro.pl</StyledA>
                <StyledA>instagram</StyledA>
                <StyledA rel='nofollow noopener noreferrer' target='_blank' href='https://www.facebook.com/balonyznadrukiem/'>facebook</StyledA>
            </StyledDescription>
            <StyledList>
                <li><StyledLink to='/'>strona główna</StyledLink></li>
                <li><StyledLink to='/druk-3d/'>druk 3d</StyledLink></li>
                <li><StyledLink to='/modele/'>nasze modele</StyledLink></li>
                <li><StyledLink to='/galeria/'>galeria</StyledLink></li>
                <li><StyledLink to='/kontakt/'>kontakt</StyledLink></li>
                <li><StyledLink to='/inne-uslugi/'>inne usługi</StyledLink></li>
            </StyledList>
        </StyledContainer>
    </StyledFooter>

export default Footer

const StyledFooter = styled.footer`
    background-color: #02A257;
    width: 100%;
    box-shadow: 0 -2px 6px rgba(0, 0, 0, .32);
    display: flex;
    justify-content: center;
    font-size: 1rem;
`

const StyledContainer = styled.div`
    width: 1080px;
    padding: 1rem;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media(min-width: 1096px) {
        padding: 1rem 0;
    }
`

const StyledDescription = styled.div`
    width: 50%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
`

const StyledP = styled.p`
    font-size: 1rem;
    margin-top: 0;
`

const StyledA = styled.a`
    font-weight: bold;
    margin: .25rem 0;
    color: #fff;
    display: block;
    transition: color 300ms ease-in-out;

    &:hover, &:focus {
        color: #eee;
    }

    &:last-child {
        margin-bottom: 0;
    }
`

const StyledList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 50%;
    max-width: 300px;
    text-align: right;
`

const StyledLink = styled(Link)`
    font-weight: bold;
    display: block;
    margin-bottom: .5rem;
    font-size: 1rem;
    color: #fff;
    transition: color 300ms ease-in-out;

    &:hover, &:focus {
        color: #ccc;
    }
`