import * as React from 'react'
import Readme from '@/profile/components/Readme'
import CommonInformation from '@/common/components/CommonInformation'

export default function ProfilePage () {
  return(
    <>
      <CommonInformation />
      <Readme />
    </>
  )
}