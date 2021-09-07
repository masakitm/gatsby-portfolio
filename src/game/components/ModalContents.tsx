import * as React from 'react'
import Icon from '@/common/components/Icon'
export default function ModalContents () {
  return (
    <div>
      <h2>あそびかた</h2>
      
      <div className="paragraph">
        <span className="blue">パネル</span>をおしてみましょう。<br />
        おしたところと、上下左右4つの色が反転します。
      </div>

      <div className="paragraph">
        <Icon
          coloredCells={[]}
          size={6}
        />
        　→　
        <Icon
          coloredCells={[2,4,5,6,8]}
          size={6}
        />
      </div>
      
      <div className="paragraph">
        全部の<span className="blue">パネル</span>を<span className="orange">オレンジ</span>にすればクリアです！
      </div>
    </div>
  )
}