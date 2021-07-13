import * as React from 'react'
import CommonWindow from '../components/common/CommonWindow'
import CommonInformation from '../components/common/CommonInformation'

import ToTopInConsole from '../components/common/ToTopInConsole'

export default function AboutPage () {
  return (
    <>
      <CommonInformation />
      <CommonWindow>
        <div className="markdown">
          <h2>about this page</h2>

          <h3>本アプリケーションで利用した技術</h3>
          <ul>
            <li>言語: typescript, GraphQL</li>
            <li>フレームワーク: gatsby</li>
            <li>ライブラリ: react, react-markdown, axios, redux, redux toolkit</li>
            <li>ドキュメント: mdx, markdown</li>
            <li>cssフレームワーク: not used any css frameworks</li>
            <li>ホスティング: vercel</li>
          </ul>

          <h3>AUTHOR</h3>
          <ul>
            <li>開発: masakitm</li>
            <li>デザイン: masakitm</li>
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