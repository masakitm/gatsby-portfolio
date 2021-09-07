import * as React from 'react'

export default function ModalContents () {
  return (
    <div>
      <h2>あそびかた</h2>
      <div className="paragraph">
        &#x2b05; &#x27a1;でヨコへ動きます<br />
        &#x2b06; で回転します<br />
        &#x2b07; で速く落ちます
      </div>

      <div className="paragraph">
        ヨコ1列にそろうとブロックが消えます<br />
        たくさん消してみましょう！
      </div>
    </div>
  )
}
