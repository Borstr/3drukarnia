import * as React from "react"
import Styled, { createGlobalStyle } from 'styled-components'

import Navbar from './navbar'

const Layout = ({ children }) => {
    return ( 
      <>
        <Navbar/>
        <GlobalStyle/>
        <main>{ children }</main>  
      </>
    )
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fefefe;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  h1 {
    font-size: 4rem;
    font-weight: bold;
  }

  h2 {
    font-size: 3rem;
    font-weight: bold;
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
  }
`

export default Layout