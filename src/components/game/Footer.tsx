import * as React from 'react'

import { BOARD_SIZES } from '@/consts'

import IconArrow from '@/components/common/IconArrow'

import * as styles from './footer.module.css'

type Props = {
  size: number,
  moveBoard: () => void
}

export default function Footer (props: Props) {
  const { size, moveBoard } = props

  return (
    <div className={styles.footer}>
      {
        BOARD_SIZES.map((item, index) => {
          return (
            <>
              {
                size === BOARD_SIZES[index].value && (
                  <button
                    className={styles.button}
                    key={item.name}
                    onClick={moveBoard}
                  >
                    {item.name} <IconArrow />
                  </button>
                )
              }
            </>
          )
        })
      }
    </div>
  )
}