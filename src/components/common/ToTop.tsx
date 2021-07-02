import * as React from 'react'
import { Link } from 'gatsby'
import IconArrow from './IconArrow'

import * as styles from './totop.module.css'

export default function ToTop () {
  return (
    <div className={styles.totop}>
      <Link to="/">
        <IconArrow vector="left" /> back to top
      </Link>
    </div>
  )
}