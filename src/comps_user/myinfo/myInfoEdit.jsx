import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { API_URL, doApiGet, doApiMethod } from '../../services/apiService';



export default function MyInfoEdit() {
  const [info, setInfo] = useState({})
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
      <h2>Edit My info</h2>
       <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
        <label>Name:</label>
        <input defaultValue={info.name} {...register("name", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.name && <div className='text-danger'>Enter valid name (min 2 chars) </div>}
        <label >Email:</label>
        <input defaultValue={info.email} {...register("email", { required: true, minLength: 2 })} type="text" className='form-control' />
        <label>Phone:</label>
        <input defaultValue={info.phone} {...register("phone", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.phone && <div className='text-danger'>Enter valid phone (min 2 chars) </div>}
        <div className='mt-3'>
        <label>Birthday:</label>
        {/* const toDay= new Date(info.birth_date).toISOString().substring(0, 10);
  console.log(toDay) */}

        {/* <input input defaultValue={info.birth_date}{...register('birth_date', { required: true })} className='form-control mt-2' placeholder='birth date...' type="date" />
        {errors.birth_date && <small className='text-danger d-block'>Enter valid birth date </small>}
        <label>Info:</label> */}
        <input input defaultValue={info.info}{...register('info', { required: true })} className='form-control'  type="text" />
        {errors.info && <small className='text-danger d-block'>Enter valid info</small>}
        <label>Location:</label>
        <input input defaultValue={info.location}{...register('location', { required: true })} className='form-control'  type="text" />
        {errors.location && <small className='text-danger d-block'>Enter location </small>}
        <label>Nickname:</label>
        <input input defaultValue={info.nickname}{...register('nickname', { required: true })} className='form-control'  type="text" />
        {errors.nickname && <small className='text-danger d-block'>Enter nickname </small>}
        <label>My profile phote:</label>
        <input input defaultValue={info.img_url}{...register('img_url', { required: true })} className='form-control'  type="text" />
        {errors.img_url && <small className='text-danger d-block'>upload new photo </small>}
          <button className='btn btn-success me-5'>Update My info</button>
          <Link className='btn btn-danger' to="/user/myinfo">Back</Link>
        </div>
      </form> 
    </div>
    
  )
}
{/* <div className='d-flex justify-content-center py-3'>
            <div className='col-10 col-md-6 col-lg-4 p-3'>
                <h1 className='text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('name', { required: true, minLength: 2, maxLength: 99 })} className='form-control mt-2' placeholder='name...' type="text" />
                    {errors.name && <small className='text-danger d-block'>Enter valid name </small>}
                    <input {...register('email', { required: true, pattern: regEmail, maxLength: 88 })} className='form-control mt-2' placeholder='email...' type="text" />
                    {errors.email && <small className='text-danger d-block'>Enter valid email</small>}

                    <input {...register('password', { required: true, minLength: 3, maxLength: 99 })}   className='form-control mt-2' placeholder='password...' type="password" />
                    {errors.password && <small className='text-danger d-block'>Enter valid password </small>}

                    <input {...register('password2', { required: true, validate: (value) => { return value == getValues('password') } })} className='form-control mt-2' placeholder='confirm password...' type="password" />
                    {errors.password2 && <small className='text-danger d-block'>password not match </small>}

                    <input {...register('phone', { required: true, minLength: 8, maxLength: 99 })} className='form-control mt-2' placeholder='phone...' type="text" />
                    {errors.phone && <small className='text-danger d-block'>Enter valid phone </small>}
                    
                    <input {...register('birth_date', { required: true })} className='form-control mt-2' placeholder='birth date...' type="date" />
                    {errors.birth_date && <small className='text-danger d-block'>Enter valid birth date </small>}
                    <input {...register('info', { required: true, minLength: 2, maxLength: 99 })} className='form-control mt-2' placeholder='info...' type="text" />
                    {errors.info && <small className='text-danger d-block'>Enter valid info</small>}
                    <input {...register('img_url')} className='form-control mt-2' placeholder='img_url...' type="text" />
                    <input {...register('location', { required: true, minLength: 2, maxLength: 99 })} className='form-control mt-2' placeholder='Location...' type="text" />
                    {errors.location && <small className='text-danger d-block'>Enter valid location </small>}
                    <input {...register('nickname', { required: true, minLength: 2, maxLength: 99 })} className='form-control mt-2' placeholder='Nickname...' type="text" />
                    {errors.nickname && <small className='text-danger d-block'>Enter valid nickname </small>}
                    <button className='btn btn-primary mt-3'>Sign-Up</button>
                </form>

            </div>

        </div>  */}