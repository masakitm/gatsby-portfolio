import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

import CommonWindow from '@/components/common/CommonWindow'
import Loading from '@/components/common/Loading'
import ToTopInConsole from '@/components/common/ToTopInConsole'

const { useEffect, useState } = React

export default function Profile () {
  const [md, setMd] = useState('')

  const load = async () => {
    try {
      const fetched = await axios.get('https://raw.githubusercontent.com/masakitm/my-profile/main/README.md')
      setMd(fetched.data)
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    load()
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
      <ToTopInConsole />
    </CommonWindow>
  )
}