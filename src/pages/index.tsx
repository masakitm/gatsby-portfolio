import * as React from 'react'
import { Link } from 'gatsby'
import Window from '@/components/common/Window'
import Console from '@/components/common/Console'
import CommonInformation from '@/components/common/CommonInformation'

import '@/styles/style.css'

const styles = {
  container: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    width: `100%`,
    height: `100%`
  },

  links: {
    display: `flex`,
    justifyContent: `space-between`
  },

  link: {
    padding: `0 0.3rem`
  }
}

export default function Index () {
  return (
    <div style={styles.container}>
      <div>
        <CommonInformation />
        <Window>
          <Console>
            <h1>MasakiTM</h1>
            
            <div style={styles.links}>
              <Link style={styles.link} to="/about">About</Link>
              <Link style={styles.link} to="/profile">Profile</Link>
              <Link style={styles.link} to="/posts">Posts</Link>
              <Link style={styles.link} to="/game">Game</Link>
            </div>
          </Console>
        </Window>
      </div>
    </div>
  )
}