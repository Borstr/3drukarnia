import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

export default function Button({ type, children, to, onClick }) {
    switch(type) {
        case 'link':
            return <StyledLink to={to}>{children}</StyledLink>
        case 'a':
            return <StyledA href={to}>{children}</StyledA>
        default:
            return <StyledBtn onClick={onClick}>{children}</StyledBtn>
    }
} 

const btnCSS = css`
    height: 4rem;
    background-color: #C87D1A;
    border: none;
    color: #fff;
    font-weight: bold;
    border-radius: 3px;
    box-shadow: 0 0 6px rgba(0, 0, 0, .48);
    font-size: 2rem;
    padding: 0 2rem;
    transition: background-color 300ms ease-in-out, box-shadow 300ms ease-in-out;
    cursor: pointer;
    display: inline-block;
    line-height: 4rem;
    text-align: center;

    &:hover, &:focus {
        background-color: #E2A24E;
        box-shadow: 0 0 10px rgba(0, 0, 0, .64);
    }

    @media(max-width: 1112px) {
        width: 100%;
        font-size: 1.75rem;
    }
`

const StyledLink = styled(Link)`${btnCSS}`
const StyledA = styled.a`${btnCSS}`
const StyledBtn = styled.button`${btnCSS}`