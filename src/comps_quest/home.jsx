
import React from 'react'
import Cloudinary from '../services/cloudServiceYarin'
import Header from './header'
const Home = () => {
  return (
    <div>
      <Header/>
    <Cloudinary folder={"users_preset"}/>
    </div>
  )
}

export default Home