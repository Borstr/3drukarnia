import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function Navbar() {
    const [ shouldBeVisible, changeVisibility] = useState(null)
    
    function toggleVisibility() {
        const shouldBeVisibleC = shouldBeVisible
        if(shouldBeVisible === null) return changeVisibility(true)
        return changeVisibility(!shouldBeVisibleC)
    }
    
    return (
        <>
            <StyledNav>
                <StaticImage 
                    src='../images/nadruki-reklamowe-logo.png'
                    placeholder='blurred'
                    quality={25}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt='Logo nadruki reklamowe'
                />
                <StyledList shouldBeVisible={shouldBeVisible}>
                    <li><StyledLink to='/'>strona główna</StyledLink></li>
                    <li><StyledLink to='/druk-3d/'>druk 3d</StyledLink></li>
                    <li><StyledLink to='/modele/'>nasze modele</StyledLink></li>
                    <li><StyledLink to='/galeria/'>galeria</StyledLink></li>
                    <li><StyledLink to='/kontakt/'>kontakt</StyledLink></li>
                    <li><StyledLink to='/inne-uslugi/'>inne usługi</StyledLink></li>
                </StyledList>
                <StyledMenuBtn onClick={() => toggleVisibility(!shouldBeVisible)}>MENU</StyledMenuBtn>
            </StyledNav>
            <Overlay shouldBeVisible={shouldBeVisible} onClick={() => toggleVisibility(!shouldBeVisible)} aria-label='close menu'/>
        </>
    )
}
    

const StyledNav = styled.nav`
    width: 100%;
    height: 4rem;
    background-color: #02A257;
    box-shadow: 0 2px 6px rgba(0, 0, 0, .32);
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    & img {
        max-height: 3rem;
        width: auto;
    }
`

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style-type: none;

    @media(max-width: 1112px) {
        right: -80vw;
        width: 80vw;
        background-color: #02A257;
        flex-direction: column;
        position: fixed;
        top: 4rem;
        height: calc(100vh - 4rem);
        text-align: right;
        z-index: 998;
        padding: 0 1rem;
        box-shadow: -2px 6px 6px rgba(0, 0, 0, .32);
        display: ${({ shouldBeVisible }) => shouldBeVisible !== null ? 'block' : 'none'};
        animation: 300ms ${({ shouldBeVisible }) => shouldBeVisible === null ? 'none' : (shouldBeVisible ? showMenu : hideMenu)} ease-in-out forwards;
    }
`

const showMenu = keyframes`
    0% {
        right: -80vw;
    }
    100% {
        right: 0;
    }
`

const hideMenu = keyframes`
    0% {
        right: 0;
    }
    100% {
        right: -80vw;
    }
`

const StyledLink = styled(Link)`
    color: #fff;
    font-weight: 300;
    font-size: 1.5rem;
    display: block;
    height: 4rem;
    line-height: 4rem;
    padding: 0 .5rem;
    transition: background-color 300ms ease-in-out;

    &:hover, &:focus {
        background-color: rgba(255, 255, 255, .32);
    }

    @media(max-width: 1112px) {
        height: calc((100vh - 6rem) / 7);
        line-height: calc((100vh - 6rem) / 7);
    }
`

const StyledMenuBtn = styled.button`
    display: none;

    @media(max-width: 1112px) {
        display: block;
        height: 100%;
        background-color: transparent;
        border: none;
        color: #fff;
        font-weight: bold;
        font-size: 1.5rem;

        &:hover, &:focus {
            background-color: rgba(255, 255, 255, .32);
        }
    }
`

const Overlay = styled.button`
    display: none;

    @media(max-width: 1112px) {
        position: fixed;
        top: 4rem;
        height: calc(100vh - 4rem);
        width: 100vw;
        right: -100vw;
        border: none;
        background-color: rgba(0, 0, 0, .32);
        z-index: 997;
        display: ${({ shouldBeVisible }) => shouldBeVisible !== null ? 'block' : 'none'};
        animation: 300ms ${({ shouldBeVisible }) => shouldBeVisible === null ? 'none' : (shouldBeVisible ? showOverlay : hideOverlay)} ease-in-out forwards;
    }
`

const showOverlay = keyframes`
    0% {
        right: -100vw;
    }
    100% {
        right: 0;
    }
`

const hideOverlay = keyframes`
    0% {
        right: 0;
    }
    100% {
        right: -100vw;
    }
`