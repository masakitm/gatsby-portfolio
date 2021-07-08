import React from 'react'

import './src/styles/style.css'

export const wrapRootElement = ({
  element,
}) => {
  console.log('this is wrapRootElement')
  return <>{element}</>
}