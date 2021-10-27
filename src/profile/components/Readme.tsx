import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

// recoil
import { mdState } from '@/profile/recoil/profileRecoil'
import { useRecoilState } from 'recoil'

import CommonWindow from '@/common/components/CommonWindow'
import Loading from '@/common/components/Loading'
import ConsoleLink from '@/common/components/ConsoleLink'

const { useEffect } = React

export default function Profile () {
  const [md, setMd] = useRecoilState(mdState)

  const load = async () => {
    try {
      const fetched = await axios.get('https://raw.githubusercontent.com/masakitm/my-profile/main/README.md')
      setMd(fetched.data)
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!md) {
      load()
    }
  }, [])

  return(
    <CommonWindow>
      <div className="markdown">
        { 
          md
            ? <ReactMarkdown children={md} />
            : <Loading />
        }
      </div>
      <ConsoleLink />
    </CommonWindow>
  )
}