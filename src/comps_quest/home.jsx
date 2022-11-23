import React from 'react'
import Cloudinary from '../services/cloudinary'
import Header from './header'
const Home = () => {
  return (
    <div>
      <Header/>
      <Cloudinary/>
      Home
    </div>
  )
}

export default Home