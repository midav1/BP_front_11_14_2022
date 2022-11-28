
import useItems from 'antd/lib/menu/hooks/useItems'
import React, { useState } from 'react'
import ItemsList from '../comps_admin/items/itemsList'
import SearchItems from '../general_comps/searchItems'
import { API_URL, doApiGet } from '../services/apiService'
import Cloudinary from '../services/cloudServiceYarin'
import MySelect from '../UI/select/MySelect'
import Header from './header'
const Home = () => {

  return (
    <div>
      <Header/>
      <ItemsList/>
    </div>
  )
}

export default Home