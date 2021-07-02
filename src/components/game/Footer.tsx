import * as React from 'react'
import IconArrow from '../common/IconArrow'

import { BOARD_SIZES } from '../../consts'

import * as styles from './footer.module.css'

type Props = {
  size: number,
  click: (args: number) => void
}

export default function Footer (props: Props) {
  const { size, click } = props
  
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
                    onClick={
                      () => {
                        click(
                          BOARD_SIZES[index + 1]
                            ? BOARD_SIZES[index + 1].value
                            : BOARD_SIZES[0].value
                        )
                      }
                    }
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