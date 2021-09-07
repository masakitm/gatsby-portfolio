import * as React from 'react'
import { TITLE } from '@/tetris/consts'

import Icon from '@/common/components/Icon'

import * as styles from './header.module.css'

type Props = {
  showModal: () => void
}

export default function Header (props: Props) {
  const { showModal } = props
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <Icon
            coloredCells={[1, 4, 5, 6]}
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
        </div>
      </div>
    </div>
  )
}