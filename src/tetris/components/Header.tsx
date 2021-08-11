import * as React from 'react'
import { TITLE } from '@/tetris/consts'

import * as styles from './header.module.css'

export default function Header () {
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <span className={styles.title}>{ TITLE }</span>
        </h1>

        <div>
          <button
            className={styles.button}
            onClick={() => {}}
          >
            あそびかた
          </button>
        </div>
      </div>
    </div>
  )
}