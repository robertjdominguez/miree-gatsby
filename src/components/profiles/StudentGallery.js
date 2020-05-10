import React from "react"
import { StaticQuery, graphql } from "gatsby"
import StudentCard from "./StudentCard"
import styled from "styled-components"

const ALL_STUDENTS_QUERY = graphql`
  query allStudentsQuery {
    allStrapiStudentPortfolios {
      edges {
        node {
          Name
          Mantra
          Profile
          Project
          Slug
          Image {
            childImageSharp {
              fixed(width: 222, height: 316) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

const StudentGallery = () => {
  return (
    <Gallery>
      <GalleryWrapper>
        <StaticQuery
          query={ALL_STUDENTS_QUERY}
          render={({ allStrapiStudentPortfolios }) =>
            allStrapiStudentPortfolios.edges.map(edge => (
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
  background: rgba(201, 201, 201, 0.4);
`

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin-left: 200px;
  margin-right: 200px;
`

export default StudentGallery
