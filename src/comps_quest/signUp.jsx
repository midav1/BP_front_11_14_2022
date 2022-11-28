import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiMethod, TOKEN_KEY } from '../services/apiService';

const SignUp = () => {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const nav = useNavigate();
    const onSubmit = (_dataBody) => {
        console.log(_dataBody)
        delete _dataBody.password2;
        doApiForm(_dataBody)
    }

    const doApiForm = async (bodyData) => {
        let url = API_URL + "/users"
        try {
          let resp = await doApiMethod(url,"POST",bodyData);
            nav("/")
          console.log(resp.data)
        }
        catch (err) {
          console.log(err.response);
          alert("Somthing Wrong Error");
        }
      }
 
    return (
        <div className='d-flex justify-content-center py-3'>
            <div className='col-10 col-md-6 col-lg-4 p-3'>
                <h1 className='text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('name', { required: true, minLength: 2, maxLength: 99 })} className='form-control mt-2' placeholder='name...' type="text" />
                    {errors.name && <small className='text-danger d-block'>Enter valid name </small>}
                    <input {...register('email', { required: true, pattern: regEmail, maxLength: 88 })} className='form-control mt-2' placeholder='email...' type="text" />
                    {errors.email && <small className='text-danger d-block'>Enter valid email</small>}

                    <input {...register('password', { required: true, minLength: 3, maxLength: 99 })}   className='form-control mt-2' placeholder='password...' type="password" />
                    {errors.password && <small className='text-danger d-block'>Enter valid password </small>}

                    <input {...register('password2', { required: true, validate: (value) => { return value === getValues('password') } })} className='form-control mt-2' placeholder='confirm password...' type="password" />
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

        </div>
    )
}

export default SignUp