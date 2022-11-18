import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { API_URL, doApiGet, doApiMethod } from '../services/apiService';
export default function ChangePassword() {
  const [password, setPassword] = useState({})
  const { register, handleSubmit,getValues, formState: { errors } } = useForm();
  const nav = useNavigate();
//   בקשה בהתחלה שתשלוף את כל המידע של הטופס
  useEffect(() => {
    doApiInit();
  }, [])
  const doApiInit = async () => {
    let url = API_URL + "/users/myinfo/changepassword";
    try {
    //   let resp = await doApiGet(url);
    //   console.log(resp.data);
    //   let d= new Date(resp.data.birth_date);
    //   let date = d.getDate();
    //   let month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    //   let year = d.getFullYear();
    //   let newDate = year + "-" + month + "-" + date;
    //   console.log(newDate)
    //   let data= resp.data
    //   let data_withdate = {...data, birth_date:newDate};
    //   setInfo(data_withdate)
    }
    catch(err){
      console.log(err.response);
      alert("There problem try come back later")
    }
  }
  const onSubForm = (bodyFormData) => {
    delete bodyFormData.newpassword2;
    // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
    console.log(bodyFormData)
    doApiForm(bodyFormData);
  }
  const doApiForm = async (bodyFormData) => {
    let url = API_URL + "/changepassword" ;
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
                 <form onSubmform={handleSubmit(onSubForm)}>
                    <input {...register('email', { required: true, maxLength: 88 })} className='form-control mt-2' placeholder='email...' type="text" />
                    {errors.email && <small className='text-danger d-block'>Enter valid email</small>}

                    <input {...register('password', { required: true, minLength: 3, maxLength: 99 })}   className='form-control mt-2' placeholder='password...' type="password" />
                    {errors.password && <small className='text-danger d-block'>Enter your password </small>}
                    <input {...register('newpassword', { required: true, minLength: 3, maxLength: 99 })}   className='form-control mt-2' placeholder='password...' type="password" />
                    {errors.password && <small className='text-danger d-block'>Enter NEW valid password </small>}

                    <input {...register('newpassword2', { required: true, validate: (value) => { return value == getValues('newpassword') } })} className='form-control mt-2' placeholder='confirm password...' type="password" />
                    {errors.password2 && <small className='text-danger d-block'>password not match </small>}
                    <button className='btn btn-primary mt-3'>Change Password</button>
                </form>  
    </div>   
  )
}
