import React from "react"
import styled from "styled-components"
import Layout from "../layout"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StudentPage = ({ data }) => {
  const student = data.contentfulStudentPortfolios
  return (
    <Layout>
      <PageWrapper>
        <Student>
          <div style={{ gridColumn: "span 2" }}>
            <h1>{student.name}</h1>
            <p style={{ color: "rgba(143, 142, 142)", fontStyle: "Italic" }}>
              {student.mantra.content[0].content[0].value}
            </p>
          </div>
          <div>
            <Img fixed={student.image.fixed} />
          </div>
          <div>
            <h4>Leadership Profile</h4>
            <p>{student.profile.content[0].content[0].value}</p>
            <h4 style={{ marginTop: 40 }}>Miree Project</h4>
            <p>{student.project.content[0].content[0].value}</p>
          </div>
          <Link to="/#portfolios">&larr; Back to leadership portfolios</Link>
        </Student>
      </PageWrapper>
    </Layout>
  )
}

const PageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  margin-top: 100px;
  padding-bottom: 200px;
`

const Student = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 125px;
  min-height: 50vh;
  place-items: start start;
  grid-gap: 50px;

  h1 {
    font-weight: 200;
  }

  h4 {
    font-weight: 200;
    margin-top: 0;
    margin-bottom: 30px;
  }

  div {
    align-items: space-evenly;
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

export default StudentPage

// Page query for student
export const query = graphql`
  query PageQuery($slug: String!) {
    contentfulStudentPortfolios(slug: { eq: $slug }) {
      name
      mantra {
        content {
          content {
            value
          }
        }
      }
      profile {
        content {
          content {
            value
          }
        }
      }
      project {
        content {
          content {
            value
          }
        }
      }
      image {
        fixed(width: 300, height: 400) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
