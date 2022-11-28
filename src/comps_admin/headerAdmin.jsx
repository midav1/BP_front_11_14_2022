import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROLE, TOKEN_KEY } from '../services/apiService';
import "./admin.css";

export default function HeaderAdmin() {
  const nav = useNavigate();


  const onLogOut = () => {
    // מחיקת טוקן
    if (window.confirm("Are you sure you want to logout ?")) {
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(ROLE)
      // להעביר לעמוד לוג אין
      nav("/");
    }
  }

  return (
    <header className='container-fluid admin-header bg-info'>
      <div className="container ">
        <div className="row align-items-center">
          <div className="logo col-auto">
            <h2>Admin panel</h2>
          </div>
          <nav className='d-flex col justify-content-between align-items-center'>
            {localStorage[TOKEN_KEY] ?
            <ul className='nav'>
              <li>
                <Link to="/admin/users">Users</Link>
              </li>
              <li>
                <Link to="/admin/categories">Categories</Link>
              </li>
              <li>
                <Link to="/admin/items">Items</Link>
              </li>
              <li>
                <Link to="/admin/allitems">All Items</Link>
              </li>
            </ul> : <ul></ul> }
            <div>
              {localStorage[TOKEN_KEY] ? <button className='btn btn-danger' onClick={onLogOut}>Log out</button> : <Link to="/login" className='btn btn-dark'>Log in page</Link>}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
