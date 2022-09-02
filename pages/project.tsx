import React from 'react'
import Head from '../node_modules/next/head'
import { LinkHTMLAttributes } from 'react'
import Sidebar from '../Components/Sidebar'
import Link from '../node_modules/next/link'
const project = () => {
  return (
    <div>
       <Head>
        <title>Project Page</title>
       </Head>
       <Sidebar/>
    </div>
  )
}

export default project
