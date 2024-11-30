import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Bgslider from '../components/Bgslider'
import Testimonials from '../components/Testimonials'
import Upload from './Upload'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Bgslider/>
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default Home