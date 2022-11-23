import { observer } from 'mobx-react';
import React, {  useEffect } from 'react'
import { ReactFileInputCustom } from 'react-file-input-custom';
import uploadResStore from '../../store/uploadResStore';


function uploadphoto() {
    useEffect(()=>
    {
       uploadResStore.getResponse();
    },[])


  return (
    <div className='container'>
         <div className='d-flex flex-column align-items-center   p-5'>
            {/* <h1>Cloudinary</h1> */}
            <div className='col-4 col-md-3 col-lg-2 row'>
                <ReactFileInputCustom
                    handleChange={(e) => setCourseImagFile(e.target.files[0])}
                    classes={"p-2 w-100 w-lg-auto "}
                    text="Add picture"
                    textColor="white"
                    backgroundColor="hsl(118, 31%, 79%)"
                />
                <button className='btn btn-dark mt-2' onClick={uploadImage}>SUBMIT</button>
            </div>
        </div>
      
    </div>
  )
}
export default observer(uploadphoto)
