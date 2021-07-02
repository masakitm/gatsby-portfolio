import * as React from 'react'

type Vector = 'left' | 'right' | Empty
type Props = {
  vector?: Vector
}

const getStyle = (vector: Vector): Style => {
  return {
    position: `absolute`,
    top: `50%`,
    right: vector === 'left' ? `auto` : `-1.2rem`,
    left: vector === 'left' ? `-1.2rem` : `auto`,
    fontSize: `0.5rem`,
    transform: `translate(0%, -50%)`,
    animationName: vector === 'left' ? `buttonIconLeft` : `buttonIconRight`,
    animationIterationCount: `infinite`,
    animationDuration: `1.5s`,
    opacity: 1
  }
}

export default function IconArrow (props: Props) {
  const { vector } = props

  return (
    <div 
      style={getStyle(vector)}
    >
      {
        vector === 'left' ? '◀': '▶'
      }
    </div>
  )
}