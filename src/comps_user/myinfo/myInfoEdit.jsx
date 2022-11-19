import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { API_URL, doApiGet, doApiMethod } from '../../services/apiService';
import CheckUserComp from '../checkUserComp';
import HeaderUser from '../headerUser';



export default function MyInfoEdit() {
  const [info, setInfo] = useState({birth_date:""})
  const { register, handleSubmit, formState: { errors } } = useForm();
  const nav = useNavigate();
//   בקשה בהתחלה שתשלוף את כל המידע של הטופס
  useEffect(() => {
    doApiInit();
  }, [])

  const doApiInit = async () => {
    let url = API_URL + "/users/myinfo";
    try {
      let resp = await doApiGet(url);
      console.log(resp.data);
      let d= new Date(resp.data.birth_date);
      let date = d.getDate();
      let month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
      let year = d.getFullYear();
      let newDate = year + "-" + month + "-" + date;
      console.log(newDate)
      let data= resp.data
      let data_withdate = {...data, birth_date:newDate};
      setInfo(data_withdate)
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
    let url = API_URL + "/users/myinfo/edit" ;
    try {

      let resp = await doApiMethod(url, "PATCH", bodyFormData)
      if (resp.data) {
        alert("My info update succefuly");
        nav("/user/myinfo")
      }
      else {
        alert("There problem , try again later")
      }
    }
    catch (err) {
      console.log(err);
      alert("There is problem ")
    }
  }


  return (

    <div className='container'>
       <CheckUserComp/>
       <HeaderUser/>
      <h2>Edit My info</h2>
      {info.name?<form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
        <label>Name:</label>
        <input defaultValue={info.name} {...register("name", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.name && <div className='text-danger'>Enter valid name (min 2 chars) </div>}
        <label  >Email:</label>
        <input defaultValue={info.email} disabled={true} type="text" className='form-control' />
        <label>Phone:</label>
        <input defaultValue={info.phone} {...register("phone", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.phone && <div className='text-danger'>Enter valid phone (min 2 chars) </div>}
        <div className='mt-3'>
        <label>Birthday:</label>
    

        <input  defaultValue={info.birth_date} {...register('birth_date', { required: true })} className='form-control mt-2' placeholder='birth date...' type="date" />
        {errors.birth_date && <small className='text-danger d-block'>Enter valid birth date </small>}
        <label>Info:</label>
        <input  defaultValue={info.info}{...register('info', { required: true })} className='form-control'  type="text" />
        {errors.info && <small className='text-danger d-block'>Enter valid info</small>}
        <label>Location:</label>
        <input  defaultValue={info.location}{...register('location', { required: true })} className='form-control'  type="text" />
        {errors.location && <small className='text-danger d-block'>Enter location </small>}
        <label>Nickname:</label>
        <input  defaultValue={info.nickname}{...register('nickname', { required: true })} className='form-control'  type="text" />
        {errors.nickname && <small className='text-danger d-block'>Enter nickname </small>}
        <label>My profile phote:</label>
        <input  defaultValue={info.img_url}{...register('img_url', { required: true })} className='form-control'  type="text" />
        {errors.img_url && <small className='text-danger d-block'>upload new photo </small>}
          <button className='btn btn-success me-5'>Update My info</button>
          <Link className='btn btn-danger' to="/user/myinfo">Back</Link>
        </div>
       </form> : <h2>Loading...</h2> }
    </div>
    
  )
}
