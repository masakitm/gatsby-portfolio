import * as React from 'react'
const { useMemo } = React

import * as styles from './cell.module.css'

type Props = {
  status: boolean,
  allChecked: boolean,
  size: number,
  click: () => void
}

export default function Cell (props: Props) {
  const { click, size } = props

  const status = useMemo(() => props.status ? 'truthy' : '', [props.status])
  const allChecked = useMemo(() => props.allChecked ? 'all-checked' : '', [props.allChecked])

  return (
    <button
      className={`${styles.cell} ${status && styles[status]} ${allChecked && styles[allChecked]}`}
      style={{
        width: `calc(100% / ${size} - 4px)`,
        height: `100%`
      }}
      onClick={click}
    />
  )
}