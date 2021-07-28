import * as React from 'react'
import { Link, graphql } from "gatsby"

import CommonWindow from '@/common/components/CommonWindow'
import CommonInformation from '@/common/components/CommonInformation'
import ConsoleLink from '@/common/components/ConsoleLink'

type ArticleProps = {
  info: {
    [key: string]: string
  }
}
function Article ({ info }: ArticleProps) {
  const { title, slug, date } = info
  return (
    <div className="markdown">
      <Link to={slug}>
        <h1>{title || 'No Title'}</h1>
        <h6>{date || '2099/01/01'}</h6>
      </Link>
    </div>
  )
}

type Edge = {
  node: {
    id: string,
    frontmatter: {
      [key: string]: string
    }
  }
}
type PostsProps = {
  data: {
    allMdx: {
      edges: Edge[]
    }
  }
}
export default function Posts ({ data }: PostsProps) {
  return (
    <>
      <CommonInformation />

      <div>
        {data?.allMdx?.edges?.map(edge => {
            return (
              <CommonWindow>
                <Article
                  info={{ ...edge.node.frontmatter }}
                  key={edge.node.id}
                />
              </CommonWindow>
            )
          }
        )}
      </div>

      <div>
        <CommonWindow
        >
          <ConsoleLink />
        </CommonWindow>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          id
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`