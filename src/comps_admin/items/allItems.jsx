import { observer } from 'mobx-react';
import React, { useState, useEffect } from 'react'
import {  useNavigate, useSearchParams } from 'react-router-dom';
import PageNav from '../../general_comps/pageNav';
import { API_URL, doApiGet } from '../../services/apiService';
import itemStore from '../../store/Item';
import userStore from '../../store/userStore';
import CheckAdminComp from '../checkAdminComp'


function AllItems() {
    useEffect(()=>
    {
        itemStore.getItemList();
        console.log(userStore.user.role)
    },[])
//   const nav = useNavigate()
//   const [ar, setAr] = useState([]);
//   const [querys] = useSearchParams();
//   useEffect(() => {
//     doApi();
//   }, [querys.get("page")])

//   const doApi = async () => {
//     //?page= איסוף
//     let page = querys.get("page") || 1;
//     let url = API_URL + "/items/?page="+page;
//     try {
//       let resp = await doApiGet(url);
//       console.log(resp.data);
//       setAr(resp.data);
//     }
//     catch (err) {
//       console.log(err);
//       alert("there problem ,try again later")
//     }
//   }

  return (
    <div className='container'>
      <CheckAdminComp />
      
      <h1>List of items</h1>
      <PageNav urlPageApi={API_URL+"/items/count"}  perPage={5} navToDir="/admin/items?page=" cssClass="btn btn-info ms-2"  />
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
          <div>users</div>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Categories url</th>
            <th>Price</th>
            <th>Nickname</th>
            <th>Active</th>
            <th>Date</th>
            <th>Edit/Del</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {itemStore.itemList.map((item,i) => {
            return(
               <div>
                {item.name}
               </div>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default observer(AllItems)
