import * as React from 'react'
import { Link, graphql } from "gatsby"

import CommonWindow from '@/components/common/CommonWindow'
import CommonInformation from '@/components/common/CommonInformation'
import ToTopInConsole from '@/components/common/ToTopInConsole'

type ArticleProps = {
  info: {
    [key: string]: string
  }
}
function Article ({ info }: ArticleProps) {
  const { title, slug, date } = info
  return (
    <div>
      <Link to={slug}>
        <h1>{title || 'No Title'}</h1>
        <h2>{date || '2099/01/01'}</h2>
      </Link>
    </div>
  )
}

const width = `33vw`

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
              <CommonWindow
                width={width}
              >
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
          width={width}
        >
          <ToTopInConsole />
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