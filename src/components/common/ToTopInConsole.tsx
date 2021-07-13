import * as React from 'react'
import { Link } from 'gatsby'

import * as styles from './toTopInConsole.module.css'

export default function ToTopInConsole () {
  return (
    <Link to="/">
      <div className={styles.totop}>
        <span className={styles.arrow}>&lt;</span> BACK TO TOP
      </div>
    </Link>
  )
}