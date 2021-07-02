import * as React from 'react'

import * as styles from './commonWindow.module.css'

import Window from '../common/Window'
import Console from '../common/Console'


type Props = {
  children?: React.ReactNode
}

export default function CommonWindow (props: Props) {
  const { children } = props

  return(
    <div className={styles.container}>
      <Window>
        <Console>
          { children }
        </Console>
      </Window>
    </div>
  )
}