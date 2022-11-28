import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { API_URL, doApiGet, doApiMethod } from '../../services/apiService';

export default function EditItem() {
  const [info, setInfo] = useState({})
  const { register, handleSubmit, formState: { errors } } = useForm();
  const nav = useNavigate();
  const params = useParams();

  // בקשה בהתחלה שתשלוף את כל המידע של הטופס
  useEffect(() => {
    doApiInit();
  }, [])

  const doApiInit = async () => {
    let url = API_URL + "/items/byId" + params["id"];
    console.log(params["id"])
    try {
      let resp = await doApiGet(url);
      console.log(resp.data);
      setInfo(resp.data)
    }
    catch(err){
      console.log(err.response);
      alert("There problem try come back later")
    }
  }

  const onSubForm = (bodyFormData) => {
    // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
    console.log(bodyFormData)
    doApiForm(bodyFormData);
  }

  const doApiForm = async (bodyFormData) => {
    console.log(bodyFormData)
    let url = API_URL + "/items/" + params["id"];
    console.log(url)
    try {

      let resp = await doApiMethod(url, "PUT", bodyFormData)
      console.log(resp.data)
      if (resp.data) {
        alert("Item update succefuly");
        nav("/user/myitems")
      }
      else {
        alert("There problem , try again later")
      }
    }
    catch (err) {
      console.log(err);
      alert("There problem , or category url already in system")
    }
  }


  return (

    <div className='container'>
      <h2>Edit item</h2>
      {info.name ? <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
        <label>Name:</label>
        <input defaultValue={info.name} {...register("name", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.name && <div className='text-danger'>Enter valid name (min 2 chars) </div>}
        <label>Info:</label>
        <input defaultValue={info.info} {...register("info", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.info && <div className='text-danger'>Enter valid info (min 2 chars) </div>}
        <label>Hand:</label>
        <input defaultValue={info.hand} {...register("hand", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.hand && <div className='text-danger'>Enter valid hand (min 2 chars) </div>}
        <input defaultValue={info.img_url} {...register("img_url", { required: true, minLength: 2 })}type="text" className='form-control' />
        {errors.img_url && <div className='text-danger'>Enter valid url   (min 2 chars) </div>}
        <img src={info.img_url} alt="img" height="100"/>
        <label>Name:</label>
        <input defaultValue={info.name} {...register("name", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.name && <div className='text-danger'>Enter valid name (min 2 chars) </div>}
        <label>Location:</label>
        <input defaultValue={info.location} {...register("location", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.location && <div className='text-danger'>Enter valid location (min 2 chars) </div>}
        <label>Category_url:</label>
        <input defaultValue={info.category_url} {...register("category_url", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.category_url && <div className='text-danger'>Enter valid category_url (min 2 chars) </div>}
        <label>Price:</label>
        <input defaultValue={info.price} {...register("price", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.price && <div className='text-danger'>Enter valid price (min 2 chars) </div>}
        <div className='mt-3'>
          <button className='btn btn-success me-5'>Update</button>
          <Link className='btn btn-danger' to="/user/myitems">Back</Link>
        </div>
      </form> : <h2>Loading...</h2> }
    </div>
  )
}
