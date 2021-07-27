import React from 'react'

import './src/styles/style.css'

import { store } from './src/store'
import { Provider } from 'react-redux'

export const wrapWithProvider = ({
  element,
}) => {
  return <Provider store={store}>{element}</Provider>
}