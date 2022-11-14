import React from 'react'
import { API_URL, doApiMethod } from '../../services/apiService';

export default function Item(props) {
  let item = props.item;

  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{item.name}</td>
    </tr>
  )
}
