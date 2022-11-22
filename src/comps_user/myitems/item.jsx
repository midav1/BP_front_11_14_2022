import React from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';
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
      <td>{item.img_url}</td>
      <td>{item.location}</td>
      <td>{item.category_url}</td>
      <td>{item.price}</td>
    </tr>
   
  )
}
