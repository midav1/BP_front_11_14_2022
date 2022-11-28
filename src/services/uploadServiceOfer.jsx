import axios from 'axios';
import React, { useRef } from 'react'
import { API_URL, TOKEN_KEY } from '../services/apiService';

export default function Upload() {
  const fileRef = useRef();

  const onSub = (e) => {
    e.preventDefault();
    console.log("upload file form");
    
    doApiFileUpload();
  }

  const doApiFileUpload = async() => {
    console.log(fileRef.current.files[0])
    if(fileRef.current.files.length === 0){
      return alert("you need to choose file and then upload it")
    }
    let myFile = fileRef.current.files[0];
    if(myFile.size > 2 * 1024 * 1024){
      return alert("file too big")
    }
    console.log(myFile);
    // new FormData() -> יודע להתעסק בטופס עם מידע כמו קבצים מהצד לקוח
    const formData = new FormData();
    formData.append("myFile22",myFile);
    let url = API_URL+"/upload";
    //let url = API_URL+"/cloud/api/upload";
    try{  
      let resp = await axios.post(url, formData, {
        headers: {
          'x-api-key': localStorage[TOKEN_KEY]
        }
      })
      console.log(resp)
      if(resp.data.status===201){
        alert("file uploaded")
      }
    }
    catch (err) {
      alert("there error, try again later")
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={onSub}>
        <label>Upload file</label>
        <input ref={fileRef} type="file"  />
        <br/>
        <button>Upload</button>
      </form>
    </div>
  )
}