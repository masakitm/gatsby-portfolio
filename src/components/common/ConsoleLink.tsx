import * as React from 'react'
import { Link } from 'gatsby'

import * as styles from './consoleLink.module.css'

type Props = {
  align?: 'left' | 'center' | 'right',
  text?: string,
  to?: string
}

export default function ConsoleLink ({ align, text, to }: Props) {
  const textAlign = align || 'left'
  const linkText = text || 'BACK TO TOP'
  const linkTo = to || '/'

  return (
    <Link to={linkTo}>
      <div 
        className={styles.totop}
        style={{ textAlign }}
      >
        <span className={styles.arrow}>&lt;</span> {linkText}
      </div>
    </Link>
  )
}