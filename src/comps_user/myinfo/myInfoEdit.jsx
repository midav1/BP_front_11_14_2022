import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API_URL, doApiGet, doApiMethod } from "../../services/apiService";
import CheckUserComp from "../checkUserComp";
import { observer } from "mobx-react-lite";
import Upload from "../../services/cloudServicetoNode";
import Cloudinary from "../../services/cloudServiceYarin";
import DateService from "../../services/dateService";
// import { LocalStore } from "../../services/cloudinaryService";
function MyInfoEdit() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const [info, setInfo] = useState({ birth_date: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const nav = useNavigate();

  //const [imageUrl, setImageUrl] = useState("");
   //console.log(imageUrl);
   //if(imageUrl)
  // {info.img_url=imageUrl;}
  
  //   בקשה בהתחלה שתשלוף את כל המידע של הטופס
  useEffect(() => {
    doApiInit();
  }, []);

  const doApiInit = async () => {
    let url = API_URL + "/users/myinfo";
    try {
      let resp = await doApiGet(url);
      let newDate=DateService(resp.data.birth_date)
      let data = resp.data;
      let data_withdate = { ...data, birth_date: newDate};
      setInfo(data_withdate);
    } catch (err) {
      console.log(err.response);
      alert("There problem try come back later");
    }
  };

  const onSubForm = (bodyFormData) => {
    // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
    console.log(bodyFormData);
    doApiForm(bodyFormData);
  };

  const doApiForm = async (bodyFormData) => {
    let url = API_URL + "/users/myinfo/edit";
    try {
      let resp = await doApiMethod(url, "PATCH", bodyFormData);
      if (resp.data) {
        alert("My info update succefuly");
       nav("/user/myinfo/edit");
      } else {
        alert("There problem , try again later");
      }
    } catch (err) {
      console.log(err);
      alert("There is problem ");
    }
  };

  return (
    <div className="container">
      <CheckUserComp />
      <Upload preset={"users_preset"}/> 
      <h2>Edit My info</h2>
      {info.name ? (<div>
        <form
          onSubmit={handleSubmit(onSubForm)}
          className="col-md-6 p-3 shadow"
        >
          <label>Name:</label>
          <input
            defaultValue={info.name}
            {...register("name", { required: true, minLength: 2 })}
            type="text"
            className="form-control"
          />
          {errors.name && (
            <div className="text-danger">Enter valid name (min 2 chars) </div>
          )}
          <label>Email:</label>
          <input
            defaultValue={info.email}
            disabled={true}
            type="text"
            className="form-control"
          />
          <label>Phone:</label>
          <input
            defaultValue={info.phone}
            {...register("phone", { required: true, minLength: 2 })}
            type="text"
            className="form-control"
          />
          {errors.phone && (
            <div className="text-danger">Enter valid phone (min 2 chars) </div>
          )}
            <label>Birthday:</label>
            <input
              defaultValue={info.birth_date}
              {...register("birth_date", { required: true })}
              className="form-control mt-2"
              placeholder="birth date..."
              type="date"
            />
            {errors.birth_date && (
              <small className="text-danger d-block">
                Enter valid birth date{" "}
              </small>
            )}
            <label>Info:</label>
            <input
              defaultValue={info.info}
              {...register("info", { required: true })}
              className="form-control"
              type="text"
            />
            {errors.info && (
              <small className="text-danger d-block">Enter valid info</small>
            )}
            <label>Location:</label>
            <input
              defaultValue={info.location}
              {...register("location", { required: true })}
              className="form-control"
              type="text"
            />
            {errors.location && (
              <small className="text-danger d-block">Enter location </small>
            )}
            <label>Nickname:</label>
            <input
              defaultValue={info.nickname}
              {...register("nickname", { required: true })}
              className="form-control"
              type="text"
            />
            {errors.nickname && (
              <small className="text-danger d-block">Enter nickname </small>
            )}
            <label>My profile phote:</label>
            <input
              defaultValue={info.img_url}
              {...register("img_url", { required: true })}
              className="form-control"
              type="text"
            />
           { <div className="e-avatar-xlarge">
             <img src={info.img_url} style={{width:"200px"}} alt="profile photo" ></img>
            </div>}
            {errors.img_url && (
              <small className="text-danger d-block">upload new photo </small>
            )}
            <label>Update photo:</label>
            
          {/* onClick={()=>openInNewTab (<Upload preset={"users_preset"}/>)}  */}
        {/* <Cloudinary folder={"users_preset"}
              onImageUpload={(url) => setImageUrl(url)}/>*/}
            <button className="btn btn-success me-5">Update My info</button> 
            <Link className="btn btn-danger" to="/user/myinfo">
              Back
            </Link>
        </form>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
export default observer(MyInfoEdit);
