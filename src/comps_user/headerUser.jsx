import React from 'react'
import { Link } from 'react-router-dom'
import CheckUserComp from './checkUserComp'

const HeaderUser = () => {
    return (
        
        <div >
            <CheckUserComp/>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to={"#"}>User</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/user/myinfo"}>MyInfo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/user/myitems"}>My Items</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderUser