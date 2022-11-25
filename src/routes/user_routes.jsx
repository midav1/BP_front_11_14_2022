import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import {checkIfUser } from '../services/rolesService';
import { TOKEN_NAME } from '../services/apiService';
import HeaderUser from '../comps_user/headerUser';
const token = localStorage.getItem(TOKEN_NAME)
const UserRoutes = () => {
        const[loading,setLoading]=useState(true);
        const [isUser, setUser] =useState(false)
        
        useEffect(() => {
            checkIfUser().then(result => {
                setUser(result) 
                setLoading(false)
                
            })
        }, [])
    
    if(loading) return <div>Loading...</div>
        return(
           (token && isUser)? 
              <React.Fragment>
                <HeaderUser />
                    <Outlet/>
                </React.Fragment>       
            : <Navigate to="/login"/>
        )
        
    }


export default UserRoutes


  
