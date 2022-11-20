import React from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';
import CheckUserComp from '../checkUserComp';
import HeaderUser from '../headerUser';

export default function Item(props) {
  let item = props.item;

  return (
    <div>
    <CheckUserComp/>
    <HeaderUser/>
    <tr>
      <td>{props.index + 1}</td>
      <td>{item.name}</td>
      <td>{item.info}</td>
      <td>{item.img_url}</td>
      <td>{item.location}</td>
      <td>{item.categories_url}</td>
      <td>{item.price}</td>
    </tr></div>
  )
}
