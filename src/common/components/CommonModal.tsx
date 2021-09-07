import * as React from 'react'

import * as styles from './commonmodal.module.css'

type Props = {
  show: Boolean,
  click: () => void,
  children: React.ReactNode
}

const defaultProps: Props = {
  show: false,
  click: () => {},
  children: null
}

export default function Modal (props: Props = defaultProps) {
  const { show, click, children } = props

  return (
    <div
      className={styles.modal}
      onClick={click}
      style={{ display: show ? 'block' : 'none' }}
    >
      <div className={styles.inner}>
        { children }
      </div>
    </div>
  )
}