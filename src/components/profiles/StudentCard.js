import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import TextTruncate from "react-text-truncate"

const StudentCard = ({ content }) => {
  console.log(content)
  return (
    <Card>
      <div>
        <h2>{content.node.name}</h2>
        <TextTruncate
          line={8}
          element="span"
          truncateText="…"
          text={content.node.project.content[0].content[0].value}
        />
        <Link to={`/${content.node.slug}`}>Read more &rarr;</Link>
      </div>
      <Img
        fixed={content.node.image.fixed}
        objectFit="cover"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </Card>
  )
}

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: var(--shadow);
  margin-bottom: 20px;
  background: white;

  &:hover a {
    color: var(--gold);
  }

  h2 {
    margin-top: 0;
    font-weight: 500;
  }

  div {
    display: grid;
    align-items: space-evenly;
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
  }

  a {
    margin-top: 20px;
    margin-bottom: 20px;
    color: black;
    text-decoration: none;
    transition: ease-in-out 0.3s;
  }
`

export default StudentCard
