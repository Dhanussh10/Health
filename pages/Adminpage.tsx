import React from 'react'
import Sidebar from '../Components/Sidebar'
import Head from '../node_modules/next/head'
import Link from '../node_modules/next/link'
import { LinkHTMLAttributes } from 'react'
import Image from '../node_modules/next/image'

const Adminpage = () => {
  return (
    <div>
        <Head>
          <title>Admin Page</title>
        </Head>
      <Sidebar/>
    </div>
  )
}

export default Adminpage
