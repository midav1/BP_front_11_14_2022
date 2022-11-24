
import React from 'react'
import Upload from '../services/cloudServicetoNode'
import Header from './header'
const Home = () => {
  return (
    <div>
      <Header/>
      <Upload/>
    </div>
  )
}

export default Home