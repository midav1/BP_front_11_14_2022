import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from "react-hook-form"
import { API_URL, doApiMethod } from '../../services/apiService';
import CheckUserComp from '../checkUserComp';
import HeaderUser from '../headerUser';

export default function AddItemForm() {
   
  const{register , handleSubmit ,  formState: { errors } } = useForm();
  const nav = useNavigate();
 
  const onSubForm = (bodyFormData) => {
    // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
    console.log(bodyFormData)
    doApi(bodyFormData);
  }
  const doApi = async(bodyFormData) => {
    let url = API_URL+ "/items";
    try{

      let resp = await doApiMethod(url,"POST",bodyFormData)
      if(resp.data._id){
        alert("Item added succefuly");
        nav("/user/myitems")
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
      <CheckUserComp />
      <h2>Add new item</h2>
      <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
        <label>Name:</label>
        <input { ...register("name",{required:true, minLength:2})} type="text" className='form-control' />
        {errors.name && <div className='text-danger'>Enter valid name (min 2 chars) </div>}
        <label>INFO:</label> 
        <input { ...register("info",{required:true, minLength:2})} type="text" className='form-control' />
        {errors.info && <div className='text-danger'>Enter valid info(min 2 chars) </div>}
        <label>Hand:</label>
        <input { ...register("hand",{required:true, minLength:1})}  type="text" className='form-control' />
        {errors.hand && <div className='text-danger'>Enter valid hand   (min 2 chars) </div>}
        <label>Img url:</label>
        <input { ...register("img_url",{required:true, minLength:2})}  type="text" className='form-control' />
        {errors.img_url && <div className='text-danger'>Enter valid url   (min 2 chars) </div>}
        <label>Phone:</label>
        <input { ...register("phone",{required:true, minLength:2})}  type="text" className='form-control' />
        {errors.phone && <div className='text-danger'>Enter valid phone   (min 2 chars) </div>}
        <label>Location:</label>
        <input { ...register("location",{required:true, minLength:2})}  type="text" className='form-control' />
        {errors.location && <div className='text-danger'>Enter valid location  (min 2 chars) </div>}
        <label>Category:</label>
        <input { ...register("category_url",{required:true, minLength:2})}  type="text" className='form-control' />
        {errors.category_url && <div className='text-danger'>Enter valid url   (min 2 chars) </div>}
        <label>Price:</label>
        <input { ...register("price",{required:true, minLength:1})}  type="text" className='form-control' />
        {errors.price && <div className='text-danger'>Enter valid price  (min 2 chars) </div>}
        <label>Usernickname:</label>
        <input { ...register("user_nickname",{required:true, minLength:2})}  type="text" className='form-control' />
        {errors.user_nickname && <div className='text-danger'>Enter valid user_nickname  (min 2 chars) </div>}
        <div className='mt-3'>   
          <button className='btn btn-success me-5'>Add new</button>
          <Link className='btn btn-danger' to="/user/myitems">Back</Link>
        </div>
      </form>
    </div>
  )
}
