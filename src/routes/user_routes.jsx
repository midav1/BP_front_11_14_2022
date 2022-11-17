import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import {checkIfUser } from '../services/rolesService';
import { TOKEN_NAME } from '../services/apiService';
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
           (token && isUser) ? 
            <Outlet/> 
            : <Navigate to="/login"/>
        )
        
    }


export default UserRoutes


  
