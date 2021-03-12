import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Navbar = () => 
    <StyledNav>
        <StyledTitle>Nadruki Reklamowe</StyledTitle>
        <StyledList>
            <li><StyledLink to='/'>strona główna</StyledLink></li>
            <li><StyledLink to='/druk-3d'>druk 3d</StyledLink></li>
            <li><StyledLink to='/nasze-modele'>nasze modele</StyledLink></li>
            <li><StyledLink to='/galeria'>galeria</StyledLink></li>
            <li><StyledLink to='/kontakt'>kontakt</StyledLink></li>
        </StyledList>
    </StyledNav>

const StyledNav = styled.nav`
    width: 100%;
    height: 4rem;
    background-color: #02A257;
    box-shadow: 0 2px 6px rgba(0, 0, 0, .32);
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledTitle = styled.p`
    font-size: 2rem;
    margin: 0;
    color: #fff;
    font-weight: bold;
`

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style-type: none;
`

const StyledLink = styled(Link)`
    color: #fff;
    font-weight: 300;
    font-size: 1.5rem;
    display: block;
    height: 4rem;
    line-height: 4rem;
    padding: 0 .5rem;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 300ms ease-in-out;

    &:hover, &:focus {
        background-color: rgba(255, 255, 255, .32);
    }
`

export default Navbar