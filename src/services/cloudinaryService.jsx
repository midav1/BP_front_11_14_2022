import axios from "axios";
import { makeAutoObservable } from "mobx";
import React, { useState } from "react";
import { ReactFileInputCustom } from "react-file-input-custom";
// class CloudinaryState {
//   constructor() {
//     makeAutoObservable(this);
//   }
//   resp = "";
//   getResponse = async (formData) => {
//     const resp = await axios.post(
//       "https://api.cloudinary.com/v1_1/dos1hlppb/image/upload",
//       formData
//     );
//     this.resp = resp.data.url;
//   };
// }
// export const LocalStore = new CloudinaryState();
export function Cloudinary(props) {
  // const uploadImage = async () => {
  //   const formData = new FormData();
  //   formData.append("file", courseImagFile);
  //   formData.append("upload_preset", props.folder);
  //   LocalStore.getResponse(formData);
  // };

  const [courseImagFile, setCourseImagFile] = useState(false);
    const uploadImage = async () => {
      const formData = new FormData();
      formData.append("file", courseImagFile);
      formData.append("upload_preset", props.folder);
      //"users_preset");

      const resp = await axios.post(
        "https://api.cloudinary.com/v1_1/dos1hlppb/image/upload",
        formData
      );
      console.log(props);
      console.log(resp.data.url);
      props.onImageUpload(resp.data.url);
  //     //return resp.data.url
  //   };
  // 1 objectUser = {name: "user", email:   "user@example.com"}
  // 2 objectUser.imgUrl = await uploadImage()
  // 3 objectUser = {name: "user", email:   "user@example.com", imgUrl: "http://example.com}
  console.log(courseImagFile);
  return (
    <div className="d-flex flex-column align-items-center   p-5">
      {/* <h1>Cloudinary</h1> */}
      <div className="col-4 col-md-3 col-lg-2 row">
        <ReactFileInputCustom
          handleChange={(e) => setCourseImagFile(e.target.files[0])}
          classes={"p-2 w-100 w-lg-auto "}
          text="Add picture"
          textColor="white"
          backgroundColor="hsl(118, 31%, 79%)"
        />
        <button className="btn btn-dark mt-2" onClick={uploadImage}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}
}
