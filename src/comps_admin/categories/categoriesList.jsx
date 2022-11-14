import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { API_URL, doApiGet } from '../../services/apiService';
import CheckAdminComp from '../checkAdminComp'
import CategoryItem from './categoryItem';


export default function CategoriesList() {

  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    let url = API_URL + "/categories/";
    try {
      let resp = await doApiGet(url);
      console.log(resp.data);
      setAr(resp.data);
    }
    catch (err) {
      console.log(err);
      alert("there problem ,try again later")
    }
  }


  return (
    <div className='container py-4'>
      <CheckAdminComp />
      <Link to="/admin/addCategory" className='btn btn-success'>Add new category</Link>
      <h1>List of categories</h1>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>url name</th>
            <th>img_url</th>
            <th>Edit/Del</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((item,i) => {
            return(
              <CategoryItem key={item._id} index={i} item={item} doApi={doApi} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
