import * as React from 'react'
import { Link } from 'gatsby'

import * as styles from './toTopInConsole.module.css'

type Align = {
  align?: 'left' | 'center' | 'right'
}

export default function ToTopInConsole ({ align }: Align) {
  const textAlign = align || 'left'
  return (
    <Link to="/">
      <div 
        className={styles.totop}
        style={{ textAlign }}
      >
        <span className={styles.arrow}>&lt;</span> BACK TO TOP
      </div>
    </Link>
  )
}