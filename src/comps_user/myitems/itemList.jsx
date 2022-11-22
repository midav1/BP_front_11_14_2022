import React,{ useState , useEffect }  from 'react'
import { Link } from 'react-router-dom';
import { API_URL, doApiGet } from '../../services/apiService';
import CheckUserComp from '../checkUserComp';
import Item from './item';

export default function ItemList() {
  const [ar,setAr] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    let url = API_URL+"/foods/myitems";
    try{
      let resp = await doApiGet(url);
      console.log(resp.data);
      setAr(resp.data);
    }
    catch(err){
      console.log(err);
      alert("there problem ,try again later")
    }

  }


  return (
    <div className='container'>
 <CheckUserComp/>
    <Link to="/user/myitems/additem" className='btn btn-success'>Add new item for sell</Link>
      <h1>List of items in systems</h1>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Info</th>
            <th>Hand</th>
            <th>Img_url</th>
            <th>Location</th>
            <th>Category_url</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((item,i) => {
            return(
              <Item key={item._id} index={i} item={item}/>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
