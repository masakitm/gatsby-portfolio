import { atom } from 'recoil';

export const mdState = atom<string>({
  key: 'profileMdState',
  default: ''
})
