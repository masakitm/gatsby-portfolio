import * as React from 'react'
import CommonWindow from '../components/common/CommonWindow'
import CommonInformation from '../components/common/CommonInformation'

import ToTopInConsole from '../components/common/ToTopInConsole'

function LinkToOtherDomain ({ path }: { path: string }) {
  return (
    <a
      href={path}
      aria-label="source"
      target="_blank"
      rel="norefferer"
    >
      {path}
    </a>
  )
}

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

          <h3>Author</h3>
          <ul>
            <li>開発: masakitm</li>
            <li>デザイン: masakitm</li>
          </ul>

          <h3>Links</h3>
          <ul>
            <li>Github: <LinkToOtherDomain path="https://github.com/masakitm/" /></li>
            <li>Zenn.dev: <LinkToOtherDomain path="https://zenn.dev/masakitm/" /></li>
            <li>Qiita: <LinkToOtherDomain path="https://qiita.com/_masakitm_" /></li>
            <li>Portfolio(2017, old): <LinkToOtherDomain path="http://masakit.herokuapp.com/" /></li>
          </ul>

          <h3>Source</h3>
          <p>source: <LinkToOtherDomain path="https://github.com/masakitm/gatsby-portfolio" /></p>
          
          <ToTopInConsole />
        </div>
      </CommonWindow>
    </>
  )
}