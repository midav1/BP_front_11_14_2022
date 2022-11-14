import React from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';

export default function FoodItem(props) {

  const onDelClick = async() =>{
    if(window.confirm("Are you sure you want to delete: "+item.name)){
      try{
        let url = API_URL+"/foods/"+item._id;
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
      <td title={item.info}>{item.name}</td>
      <td>{item.location}</td>
      <td>{item.categories_url}</td>
      <td>{item.price} nis</td>
      <td>{item.user_nickname } </td>
      <td>{String(item.active) } </td>
      <td>{item.date_created } </td>
      
      <td>
        <button onClick={() => {onDelClick()}} className='btn btn-danger'>Del</button>
      </td>
    </tr>
  )
}
