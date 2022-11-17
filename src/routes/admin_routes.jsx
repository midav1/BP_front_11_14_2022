import { Outlet, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { TOKEN_NAME } from '../services/apiService';
import { checkIfAdmin } from './../services/rolesService'
const token = localStorage.getItem(TOKEN_NAME)

const AdminRoutes = () => {  
    const [isAdmin, setAdmin] =useState(false)
    
    useEffect(() => {
        checkIfAdmin().then(result => {
            setAdmin(result)
        })
    }, [])


    return(
       // (token && isAdmin) ? 
        <Outlet/> 
        //: <Navigate to="/login"/>
    )
}

export default AdminRoutes