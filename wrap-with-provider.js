import React from 'react'

import './src/styles/style.css'

import { store } from './src/store'
import { Provider } from 'react-redux'

import { RecoilRoot } from 'recoil';

export const wrapWithProvider = ({
  element,
}) => {
  return <RecoilRoot><Provider store={store}>{element}</Provider></RecoilRoot>
}