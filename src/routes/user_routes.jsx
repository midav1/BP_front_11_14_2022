import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import {checkIfUser } from '../services/rolesService';
import { TOKEN_NAME } from '../services/apiService';
const token = localStorage.getItem(TOKEN_NAME)
const UserRoutes = () => {
   
        const [isUser, setUser] =useState(false)
        
        useEffect(() => {
            checkIfUser().then(result => {
                setUser(result)
            })
        }, [])
    
    
        return(
           // (token && isUser) ? 
            <Outlet/> 
            //: <Navigate to="/login"/>
        )
    }


export default UserRoutes


  
