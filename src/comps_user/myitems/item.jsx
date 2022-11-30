import React from 'react'
import { Link } from 'react-router-dom';
import CheckUserComp from '../checkUserComp';

export default function Item(props) {
  let item = props.item;
  return (

    
    <tr>
      <CheckUserComp/>
      <td>{props.index + 1}</td>
      <td>{item.name}</td>
      <td>{item.info}</td>
      <td>{item.hand}</td>
      <td> { <div className="e-avatar-xlarge">
             <img src={item.img_url} style={{width:"100px"}} alt="item photo" ></img>
            </div>}</td>
      <td>{item.location}</td>
      <td>{item.category_url}</td>
      <td>{item.price}</td>
      <td>{item.nickname}</td>
      <td> <Link className='btn btn-info me-2' to={"/user/myitem/"+item._id} >Edit</Link></td>
    </tr>
   
  )
}
