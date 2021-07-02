import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

import Window from '../common/Window'
import Console from '../common/Console'

import * as styles from './readme.module.css'

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
    <div className={styles.container}>
      <Window>
        <Console>
          <div className="markdown">
            <ReactMarkdown children={md} />
          </div>
        </Console>
      </Window>
    </div>
  )
}