import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

import { useSelector, useDispatch } from "react-redux";
import { updateMd } from '@/store/profileSlice'

import CommonWindow from '@/components/common/CommonWindow'
import Loading from '@/components/common/Loading'
import ConsoleLink from '@/components/common/ConsoleLink'

const { useEffect } = React

export default function Profile () {
  const dispatch = useDispatch()
  const md = useSelector<RootState, string>(state => state.profile.md)

  const setMd = (markdown: string) => dispatch(updateMd(markdown))

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