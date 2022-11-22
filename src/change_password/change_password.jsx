import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { API_URL, doApiMethod } from '../services/apiService';
export default function ChangePassword() {
  const [password, setPassword] = useState({})
  const { register, handleSubmit,getValues, formState: { errors } } = useForm();
  const nav = useNavigate();
//   בקשה בהתחלה שתשלוף את כל המידע של הטופס
  useEffect(() => {
    //doApiForm();
  }, [])
  const onSubForm = (bodyFormData) => {
    delete bodyFormData.newpassword2;
    // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
    console.log(bodyFormData)
    doApiForm(bodyFormData);
  }
  const doApiForm = async (bodyFormData) => {
    let url = API_URL + "/users/changepassword" ;
    try {

      let resp = await doApiMethod(url, "PATCH", bodyFormData)
      if (resp.data) {
        alert("My password  changed succefuly");
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
      <h2>Change Password</h2>
                 <form onSubmit={handleSubmit(onSubForm)}>
                    <input {...register('email', { required: true, maxLength: 88 })} className='form-control mt-2' placeholder='email...' type="text" />
                    {errors.email && <small className='text-danger d-block'>Enter valid email</small>}
                    <input {...register('password', { required: true, minLength: 3, maxLength: 99 })}   className='form-control mt-2' placeholder='password...' type="password" />
                    {errors.password && <small className='text-danger d-block'>Enter your password </small>}
                    <input {...register('newpassword', { required: true, minLength: 3, maxLength: 99 })}   className='form-control mt-2' placeholder='new password...' type="password" />
                    {errors.password && <small className='text-danger d-block'>Enter NEW valid password </small>}
                    <input {...register('newpassword2', { required: true, validate: (value) => { return value == getValues('newpassword') } })} className='form-control mt-2' placeholder='confirm  new password...' type="password" />
                    {errors.password2 && <small className='text-danger d-block'>password not match </small>}
                    <button className='btn btn-primary mt-3'>Change Password</button>
                </form>  
    </div>   
  )
}
