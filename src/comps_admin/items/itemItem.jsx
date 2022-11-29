import React from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';
import DateService from '../../services/dateService';
import CheckAdminComp from '../checkAdminComp';

export default function ItemItem(props) {

  const onDelClick = async() =>{
    if(window.confirm("Are you sure you want to delete: "+item.name)){
      try{
        let url = API_URL+"/items/"+item._id;
        let resp = await doApiMethod(url,"DELETE");
        console.log(resp.data);
        if(resp.data.deletedCount == 1){
          props.doApi();
        }
      }
      catch(err){
        console.log(err.response);
        alert("There problem , try again later")
      }

    }
  }

  let item = props.item;
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td> {item.name}</td>
      <td> {item.info}</td>
      <td>{item.img_url } { <div className="e-avatar-xlarge">
             <img src={item.img_url} style={{width:"100px"}} alt="item photo" ></img>
            </div>} </td>
      <td>{item.location}</td>
      <td>{item.categories_url}</td>
      <td>{item.price} nis</td>
      {/* <td>{String(item.active) } </td> */}
      <td>{DateService( item.date_created) } </td>
      {/* <td>
        <button onClick={() => {onDelClick()}} className='btn btn-danger'>Del</button>
      </td> */}
    </tr>
  )
}
