import * as React from 'react'
import CommonWindow from '../components/common/CommonWindow'
import ToTopInConsole from '../components/common/ToTopInConsole'
import CommonInformation from '../components/common/CommonInformation'

export default function AboutPage () {
  return (
    <>
      <CommonInformation />
      <CommonWindow>
        <div className="markdown">
          <h2>about this page</h2>

          <p>本Webページアプリケーションで利用した技術</p>
          
          <ul>
            <li>language: typescript</li>
            <li>SPA framework: gatsby</li>
            <li>javascript librariess: react, react-markdown, axios, redux, redux toolkit</li>
            <li>css framework: not used any css frameworks</li>
            <li>hosting: vercel</li>
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
          <ToTopInConsole />
        </div>
      </CommonWindow>
    </>
  )
}