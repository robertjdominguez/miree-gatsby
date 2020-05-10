import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import StudentGallery from "../components/profiles/StudentGallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <StaticQuery
      query={graphql`
        query {
          fileName: file(relativePath: { eq: "alt_front.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.fileName.childImageSharp.fluid

        const backgroundFluidImageStack = [
          imageData,
          `linear-gradient(to top, rgba(125, 125, 125, 1), rgba(125, 125, 125, .05))`,
        ].reverse()

        return (
          <BackgroundImage
            fluid={backgroundFluidImageStack}
            style={{
              minHeight: "75vh",
              minWidth: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              margin: 0,
            }}
          >
            <HeaderText>
              <div>
                <h1>Upper School Leadership Portfolios</h1>
                <p>
                  There are currently over <span>80</span> projects in various
                  stages of development. The portfolios below offer snapshots of
                  the diverse and selfless leadership coming out of The C. Kyser
                  Miree Ethical Leadership at The Altamont School. Enjoy!
                </p>
                <ButtonBox>
                  <Link>Student Portfolios</Link>
                  <a href="">Help with COVID</a>
                </ButtonBox>
              </div>
            </HeaderText>
          </BackgroundImage>
        )
      }}
    />
    <StudentGallery />
  </Layout>
)

const HeaderText = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 100px;
  padding-top: 80px;
  color: white;

  p {
    line-height: 1.8rem;
    font-size: 1.4rem;

    span {
      color: #e7a614;
    }
  }

  a {
    color: white;
    text-decoration: none;
    border: solid 1px white;
    padding: 10px 20px;
    border-radius: 6px;
    transition: ease-in-out 0.3s;

    &:hover {
      background: white;
      color: black;
    }
  }
`

const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  place-items: center start;
`

export default IndexPage
