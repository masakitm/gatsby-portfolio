import * as React from 'react'
import ToTop from '../components/common/ToTop'

import CommonWindow from '../components/common/CommonWindow'

export default function AboutPage () {
  return (
    <>
      <ToTop />
      <CommonWindow>
        <div className="markdown">
          about this page<br />

          利用した技術
          <ul>
            <li>gatsby</li>
            <li>axios</li>
            <li>react-markdown</li>
            <li>typescript</li>
          </ul>
        </div>
      </CommonWindow>

    </>
  )
}