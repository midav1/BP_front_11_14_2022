import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from "react-hook-form"
import { API_URL, doApiMethod } from '../../services/apiService';
import CheckAdminComp from '../checkAdminComp';

export default function AddCategoryForm() {
   
  const{register , handleSubmit ,  formState: { errors } } = useForm();
  const nav = useNavigate();
 
  const onSubForm = (bodyFormData) => {
    // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
    console.log(bodyFormData)
    doApi(bodyFormData);
  }
  const doApi = async(bodyFormData) => {
    let url = API_URL+ "/categories";
    try{

      let resp = await doApiMethod(url,"POST",bodyFormData)
      if(resp.data._id){
        alert("Item added succefuly");
        nav("/admin/categories")
      }
      else{
        alert("There problem , try again later")
      }
    }
    catch(err){
      console.log(err);
      alert("There problem , or category url already in system")
    }
  }
  return ( 
    <div className='container'>
      <CheckAdminComp />
      <h2>Add new category</h2>
      <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
        <label>Name:</label>
        <input { ...register("name",{required:true, minLength:2})} type="text" className='form-control' />
        {errors.name && <div className='text-danger'>Enter valid name (min 2 chars) </div>}

        <label>Url name:</label>
        <input { ...register("url_name",{required:true, minLength:2})} type="text" className='form-control' />
        {errors.url_name && <div className='text-danger'>Enter valid url name (min 2 chars) </div>}
        <label>Info:</label>
        <textarea { ...register("info",{required:true, minLength:2})}  className='form-control' rows="5"></textarea>
        {errors.url_name && <div className='text-danger'>Enter valid info  (min 2 chars) </div>}
        <label>Img url:</label>
        <input { ...register("img_url",{required:true, minLength:2})}  type="text" className='form-control' />
        {errors.img_url && <div className='text-danger'>Enter valid url   (min 2 chars) </div>}
        <div className='mt-3'>
          <button className='btn btn-success me-5'>Add new</button>
          <Link className='btn btn-danger' to="/admin/categories">Back</Link>
        </div>
      </form>
    </div>
  )
}
