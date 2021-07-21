import * as React from 'react'

import * as styles from './window.module.css'

type Props = {
  children?: React.ReactNode,
  width?: string
}

export default function Window (props: Props) {
  const { children, width } = props
  const style = width ? { width } : {}

  return (
    <div 
      className={styles.window}
      style={style}
    >
      <div className={styles.buttons}>
        <span className={styles.button_red}>●</span>
        <span className={styles.button_yellow}>●</span>
        <span className={styles.button_green}>●</span>
      </div>
      
      { children }
    </div>
  )
}