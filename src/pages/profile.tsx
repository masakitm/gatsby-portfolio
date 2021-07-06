import * as React from 'react'
import Readme from '../components/profile/Readme'
import ToTop from '../components/common/ToTop'
import CommonInformation from '../components/common/CommonInformation'

export default function ProfilePage () {
  return(
    <>
      <ToTop />
      <CommonInformation />
      <Readme />
    </>
  )
}