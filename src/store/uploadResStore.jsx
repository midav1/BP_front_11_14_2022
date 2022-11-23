import axios from "axios";
import { makeAutoObservable } from "mobx";
import { useState } from "react";
import { ReactFileInputCustom } from "react-file-input-custom";
class UploadResponse {
    constructor()
    {
        makeAutoObservable(this)
    }
    response = ""
    getResponse=async ()=>
    {
        const [courseImagFile, setCourseImagFile] = useState(false);
        try {
            const formData = new FormData();
            formData.append("file", courseImagFile);
            formData.append("upload_preset","users_preset");
            //"users_preset");
    
            const resp = await axios.post(
                "https://api.cloudinary.com/v1_1/dos1hlppb/image/upload",
                formData
            )
            this.response=resp.data.url;  
          }
          catch (err) {
            console.log(err);
            alert("there problem ,try again later")
          }
        //  return(
        //     <div className='container'>
        //          <div className='d-flex flex-column align-items-center   p-5'>
        //             {/* <h1>Cloudinary</h1> */}
        //             <div className='col-4 col-md-3 col-lg-2 row'>
        //                 <ReactFileInputCustom
        //                     handleChange={(e) => setCourseImagFile(e.target.files[0])}
        //                     classes={"p-2 w-100 w-lg-auto "}
        //                     text="Add picture"
        //                     textColor="white"
        //                     backgroundColor="hsl(118, 31%, 79%)"
        //                 />
        //                 <button className='btn btn-dark mt-2' onClick={this.getResponse}>SUBMIT</button>
        //             </div>
        //         </div>
              
        //     </div>)
          
    }
    
}
const uploadResStore=new UploadResponse()
export default uploadResStore;