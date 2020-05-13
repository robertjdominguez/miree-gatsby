import React from "react"
import styled from "styled-components"

const Block = ({ content }) => {
  console.log(content.node)
  return (
    <Emergency>
      <hr />
      <h2>{content.node.headline}</h2>
      <h5>Update from Katherine Berdy</h5>
      <div
        dangerouslySetInnerHTML={{
          __html: content.node.information.childContentfulRichText.html,
        }}
      />
    </Emergency>
  )
}

const Emergency = styled.div`
  margin-bottom: 100px;
  margin-top: 100px;
  line-height: 1.6;

  h5 {
    margin-bottom: 2rem;
    margin-top: 0;
    color: var(--grey-300);
  }
`

export default Block
