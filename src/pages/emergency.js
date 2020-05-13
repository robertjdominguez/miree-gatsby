import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Block from "../components/emergency/block"
import styled from "styled-components"

const EMERGENCY_QUERY = graphql`
  query emergencyQuery {
    allContentfulEmergency(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          node_locale
          headline
          information {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`

const emergency = () => {
  return (
    <Layout>
      <PageWrapper>
        <h1>COVID-19 Updates</h1>
        <p>
          Check back here for updates on COVID-19 outreach and what{" "}
          <strong>you</strong> can do to help. Updates are available once a
          month. For more information, please email{" "}
          <a href="mailto:kberdy@altamontschool.org">Katherine Berdy</a>.
        </p>
        <StaticQuery
          query={EMERGENCY_QUERY}
          render={({ allContentfulEmergency }) =>
            allContentfulEmergency.edges.map(edge => <Block content={edge} />)
          }
        />
      </PageWrapper>
    </Layout>
  )
}

const PageWrapper = styled.div`
  margin-top: 20px;
  margin-left: 50px;
  margin-right: auto;
  max-width: 800px;

  a {
    color: black;
    text-decoration: none;
    border-bottom: solid 2px black;
    transition: ease-in-out 0.3s;

    &:hover {
      color: var(--gold);
      border-bottom: solid 2px var(--gold);
    }
  }
`

export default emergency
