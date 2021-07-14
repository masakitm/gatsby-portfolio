import * as React from 'react'

import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

// import CommonWindow from '@/components/common/CommonWindow'
// import CommonInformation from '@/components/common/CommonInformation'
// import ToTopInConsole from '@/components/common/ToTopInConsole'

import { AUTHOR } from '@/consts'

export type Mdx = {
  frontmatter: {
    [key: string]: string
  },
  body: string
}

type Props = {
  data: {
    mdx: Mdx
  }
}

export default function PageTemplate({ data: { mdx } }: Props ) {
  return (
    <>
      <div style={{ padding: "0 1rem", marginBottom: "10rem" }}>
        <h1>{mdx.frontmatter?.title}</h1>
        <h4
          style={{ color: "gray", fontWeight: "normal" }}
        >
          {`${mdx.frontmatter?.date} by ${mdx.frontmatter?.author || AUTHOR}`}
        </h4>
        
        <MDXProvider components={{}}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`