import React from "react"
import { StaticQuery, graphql } from "gatsby"
import StudentCard from "./StudentCard"
import styled from "styled-components"

const ALL_STUDENTS_QUERY = graphql`
  query allStudentsQuery {
    allContentfulStudentPortfolios {
      edges {
        node {
          name
          mantra {
            content {
              content {
                value
              }
            }
          }
          slug
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
    }
  }
`

const StudentGallery = () => {
  return (
    <Gallery id="portfolios">
      <GalleryWrapper>
        <StaticQuery
          query={ALL_STUDENTS_QUERY}
          render={({ allContentfulStudentPortfolios }) =>
            allContentfulStudentPortfolios.edges.map(edge => (
              <StudentCard content={edge} />
            ))
          }
        />
      </GalleryWrapper>
    </Gallery>
  )
}

const Gallery = styled.div`
  padding-top: 200px;
  padding-bottom: 200px;
  background: rgba(201, 201, 201, 0.4);
`

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    margin-left: 20px;
    margin-right: 20px;
  }
`

export default StudentGallery
