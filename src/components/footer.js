import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Logo from "../images/logo.png"
import AltLogo from "../images/altamont_logo.png"

const Footer = () => (
  <HeaderNav>
    <a
      target="_blank"
      href="https://www.altamontschool.org/academics/leadership"
    >
      <img src={AltLogo} />
    </a>
    <Link to="/">
      <img src={Logo} />
    </Link>
  </HeaderNav>
)

const HeaderNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 30vh;
  place-items: center center;

  img {
    width: 30vw;
    height: auto;
    max-width: 300px;
  }
`

export default Footer
