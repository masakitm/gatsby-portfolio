import * as React from 'react'
import Icon from './Icon'

import * as styles from './modal.module.css'

type Props = {
  show: Boolean,
  click: () => void
}

const defaultProps: Props = {
  show: false,
  click: () => {}
}

export default function Modal (props: Props = defaultProps) {
  const { show, click } = props

  return (
    <div
      className={styles.modal}
      onClick={click}
      style={{ display: show ? 'block' : 'none' }}
    >
      <div className={styles.inner}>
        <div>
          <h2>あそびかた</h2>
          <div className={styles.paragraph}>
            パネルをおしてみましょう。<br />
            おしたところと、上下左右4つの色が反転します。
          </div>

          <div className={styles.paragraph}>
            <Icon
              coloredCells={[5,8,9]}
              size={6}
            />
            　→　
            <Icon
              coloredCells={[2,4,5,6,8]}
              size={6}
            />
          </div>
          
          <div className={styles.paragraph}>
            全部の<span className="blue">パネル</span>を<span className="orange">オレンジ</span>にすればクリアです！
          </div>
        </div>
      </div>
    </div>
  )
}