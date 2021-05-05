import * as React from "react"
import { createGlobalStyle } from 'styled-components'

import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
    return ( 
      <>
        <Navbar/>
        <GlobalStyle/>
        <main>{ children }</main>
        <Footer/>
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
    font-size: 3rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin: .5rem 0;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p, ul, li {
    font-size: 1rem;
  }
    
  a {
    text-decoration: none;
  }

  ul {
    margin: .5rem 0;
    margin-left: -1rem;
  }

  p {
    margin: .5rem 0;
  }

  @media(min-width: 481px) {

  }

  @media(min-width: 769px) {
    h1 {
      font-size: 3.5rem;
      font-weight: bold;
      margin: 2rem 0;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin: 1rem 0;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
    }

    p, ul, li {
      font-size: 1rem;
    }
  }

  @media(min-width: 1096px) {
    h1 {
      font-size: 4rem;
      font-weight: bold;
      margin: 2rem 0;
    }

    h2 {
      font-size: 3rem;
      font-weight: bold;
      margin: 1rem 0;
    }

    h3 {
      font-size: 2rem;
      font-weight: bold;
    }

    p, ul, li {
      font-size: 1.5rem;
    }
  }
`

export default Layout