import React,{ useState , useEffect }  from 'react'
import { Link } from 'react-router-dom';
import ChangePassword from '../../change_password/change_password';
import { API_URL, doApiGet, doApiMethod} from '../../services/apiService';
import CheckUserComp from '../checkUserComp';

export default function MyInfo() {
  const [info,setMyinfo] = useState({birth_date:"",date_created:""});
  useEffect(() => {
    doApi();
  },[])
  const doApi = async() => {
    let url = API_URL+"/users/myinfo";
    try{
      let resp = await doApiGet(url);
      console.log(resp.data);
      setMyinfo(resp.data);
    }
    catch(err){
      console.log(err);
      alert("there problem ,try again later")
    }
  }
  return (

    <div className='container py-4'>
       <CheckUserComp/>
      {/* <Link to="/admin/addCategory" className='btn btn-success'>Add new category</Link> */}
      <h1>My Info Details</h1>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Phone</th>
            <th>birthday</th>
            <th>Info</th>
            <th>Date created</th>
            <th>Rank</th>
            <th>Role</th>
            <th>Active</th>
            <th>Location</th>
            <th>Nickname</th>
            <th>My profile photo</th>
            <th>Edit Profile</th>
          </tr>
        </thead>
        <tbody>
        <tr>
      <td>{info.name}</td>
      <td>{info.email}</td>
      <td>{info.phone}</td>
      <td>{info.birth_date.slice(0,10)}</td>
      <td>{info.info}</td>
      <td>{info.date_created.slice(0,10)}</td>
      <td>{info.rank}</td>
      <td>{info.role}</td>
      <td>{String(info.active)}</td>
      <td>{info.location}</td>
      <td>{info.nickname}</td>
      <td><img src={info.img_url} height="40" alt="pic" /></td>
      <td> <Link className='btn btn-info me-2' to={"/user/myinfo/edit"} >Edit</Link></td>
    </tr>
        </tbody>
      </table>
      <ChangePassword/>
    </div>

  )
}
