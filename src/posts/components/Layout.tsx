import * as React from 'react'

import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import CommonWindow from '@/common/components/CommonWindow'
import CommonInformation from '@/common/components/CommonInformation'
import ConsoleLink from '@/common/components/ConsoleLink'

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
      <CommonInformation />
      <CommonWindow>
        <div 
          className="markdown"
          style={{ padding: "0 1rem" }}
        >
          <h1>{mdx.frontmatter?.title}</h1>

          <h6>
            {`${mdx.frontmatter?.date} by ${mdx.frontmatter?.author || AUTHOR}`}
          </h6>
          
          <MDXProvider components={{}}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>

        <ConsoleLink
          to="/posts"
          text="BACK TO POSTS"
        />
      </CommonWindow>
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