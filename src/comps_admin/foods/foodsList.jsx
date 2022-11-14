import React, { useState, useEffect } from 'react'
import {  useNavigate, useSearchParams } from 'react-router-dom';
import PageNav from '../../general_comps/pageNav';
import { API_URL, doApiGet } from '../../services/apiService';
import CheckAdminComp from '../checkAdminComp'
import FoodItem from './foodItem';

export default function FoodsList() {
  const nav = useNavigate()
  const [ar, setAr] = useState([]);
  const [querys] = useSearchParams();
  useEffect(() => {
    doApi();
  }, [querys.get("page")])

  const doApi = async () => {
    //?page= איסוף
    let page = querys.get("page") || 1;
    let url = API_URL + "/foods/?page="+page;
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
    <div className='container'>
      <CheckAdminComp />
      
      <h1>List of foods</h1>
      <PageNav urlPageApi={API_URL+"/foods/count"}  perPage={5} navToDir="/admin/foods?page=" cssClass="btn btn-info ms-2"  />
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Categories url</th>
            <th>Price</th>
            <th>Nickname</th>
            <th>Active</th>
            <th>Date</th>
            <th>Edit/Del</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((item,i) => {
            return(
              <FoodItem key={item._id} index={((querys.get("page")-1)*5)+i} item={item} doApi={doApi} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
