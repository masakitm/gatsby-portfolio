import * as React from 'react'
import { TITLE } from '@/consts'
import Icon from './Icon'

type Props = {
  [key: string]: () => void
}

import * as styles from './header.module.css'

export default function Header (props: Props) {
  const { showModal, reset } = props

  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <Icon
            coloredCells={[5, 8, 9]}
            size={6}
          />
          <span className={styles.title}>{ TITLE }</span>
        </h1>

        <div>
          <button
            className={styles.button}
            onClick={showModal}
          >
            あそびかた
          </button>
          <button
            className={styles.button}
            onClick={reset}
          >
            さいしょから
          </button>
        </div>
      </div>
    </div>
  )
}