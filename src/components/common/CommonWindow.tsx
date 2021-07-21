import * as React from 'react'

import * as styles from './commonWindow.module.css'

import Window from '@/components/common/Window'
import Console from '@/components/common/Console'

type Props = {
  children?: React.ReactNode,
  width?: string
}

export default function CommonWindow (props: Props) {
  const { children, width } = props
  const windowWidth = width || ''

  return(
    <div 
      className={styles.container}
    >
      <Window
        width={windowWidth}
      >
        <Console>
          { children }
        </Console>
      </Window>
    </div>
  )
}