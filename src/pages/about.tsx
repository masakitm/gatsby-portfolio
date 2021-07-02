import * as React from 'react'
import ToTop from '../components/common/ToTop'
import CommonWindow from '../components/common/CommonWindow'

export default function AboutPage () {
  return (
    <>
      <ToTop />
      <CommonWindow>
        <div className="markdown">
          <h2>about this page</h2>

          <p>本サイトで利用した技術</p>
          <ul>
            <li>language: typescript</li>
            <li>framework: gatsby</li>
            <li>librariess: react, react-markdown, axios</li>
            <li>css framework: not used any css frameworks</li>
          </ul>

          <p>
            source: 
            <a
              href="https://github.com/masakitm/gatsby-portfolio"
              aria-label="source"
              target="_blank"
              rel="norefferer"
            >
              github
            </a>
          </p>
        </div>
      </CommonWindow>

    </>
  )
}