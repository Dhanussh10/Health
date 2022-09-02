import React from 'react'
import Sidebar from '../Components/Sidebar'
import Head from '../node_modules/next/head'
import Link from '../node_modules/next/link'
import { LinkHTMLAttributes } from 'react'
const employee = () => {
  return (
    <div>
        <Head>
            <title>Employee Page</title>
        </Head>
        <Sidebar/>
      
    </div>
  )
}

export default employee
