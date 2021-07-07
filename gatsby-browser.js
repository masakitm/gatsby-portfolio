import React from 'react'

export const wrapRootElement = ({
  element,
}) => {
  console.log('this is wrapRootElement')
  return <>{element}</>
}