import React from 'React'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES } from '@contentful/rich-text-types'

export default function Modal({ 
    closeModal, 
    content: {
        alt,
        title,
        description,
        gallery,
        image
    } 
}) {
    function slideAndCloseModal() {
        
    }
    
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
        <>
            <StyledAside>
                <h3>{title}</h3>
                {renderRichText(description, renderOptions)}
            </StyledAside>
            <StyledOverlay aria-label='zamknij podgląd' onClick={() => closeModal(0)} />
        </>
    )
}

const StyledAside = styled.aside`
    width: 800px;
    max-height: 80vh;
    background-color: #02A257;
    padding: 1rem;
    position: fixed;
    left: 50%;
    right: 50%;
    margin-left: -400px;
    top: 100px;
    border-radius: 5px;
    z-index: 996;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;

    & h3, p, ul, li {
        width: 100%;
    }

    @media(max-width: 1112px) {
        width: 80vw;
        right: 0;
        top: 4rem;
        margin: 0;
        left: auto;
        height: calc(100vh - 4rem);
        border-radius: 0;
        max-height: 100vh;
    }
`

const StyledOverlay = styled.button`
    width: 100vw;
    height: calc(100vh - 4rem);
    position: fixed;
    top: 4rem;
    background-color: rgba(0, 0, 0, .32);
    border: none;
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