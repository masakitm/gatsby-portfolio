import * as React from 'react'
import * as styles from './console.module.css'

type Props = {
  children?: React.ReactNode
}

export default function Console (props: Props) {
  const { children } = props

  return (
    <div className={styles.console}>
      { children }
    </div>
  )
}