import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiGet } from '../services/apiService';

// קומפנינטה שכל תפקידה לבדוק אם המשתמש הוא אדמין
// תתווסף בכל קומפנינטה שהמשתמש חייב להיות
// אדמין כדי לבצע פעולות בה
export default function CheckUserComp() {
  
  let nav = useNavigate();

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    try{
      let url = API_URL+"/users/checkToken"
      let resp = await doApiGet(url);
      if(resp.data.role != "user"){
        alert("You must be USER to be here ,try log in again");
        nav("/user")
      }
    }
    catch(err){
      alert("There problem ,try log in again");
      nav("/login")
    }


  }
  
  return (
    <React.Fragment></React.Fragment>
  )
}
