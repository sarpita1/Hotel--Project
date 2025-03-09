import React from 'react'
import Trending from '@/Components/Trending'
import Navbar from '@/Components/Navbar'
import Advantaes from '@/Components/Advantages'
import Footer from '@/Components/Footer'
import Corousel from '@/Components/Corousel'
import Footer2 from '@/Components/Footer2'

export default function packages() {
  return (
    <div>
        <Navbar/>
        <Trending/>
        <Advantaes/>
        <Corousel/>
        <Footer/>
        <Footer2/>
    </div>
  )
}
