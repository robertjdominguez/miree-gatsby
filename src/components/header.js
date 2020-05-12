import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Logo from "../images/logo.png"

const Header = () => (
  <HeaderNav>
    <img src={Logo} style={{ maxWidth: "200px", paddingLeft: 20 }} />
    <ul>
      <li>
        <Link to="#portfolios">Portfolios</Link>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.altamontschool.org/academics/leadership"
        >
          Background
        </a>
      </li>
    </ul>
  </HeaderNav>
)

const HeaderNav = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 7fr;
  color: var(--grey-300);
  font-size: 1.2rem;
  min-height: 20vh;
  align-items: center;
  font-size: 1.4rem;
  box-shadow: var(--shadow);

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 80px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  a {
    color: black;
    text-decoration: none;
    transition: ease-in-out 0.3s;

    &:hover {
      color: var(--gold);
    }
  }
`

export default Header
