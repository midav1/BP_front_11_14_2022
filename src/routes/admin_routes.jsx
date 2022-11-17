import { Outlet, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { TOKEN_NAME } from '../services/apiService';
import { checkIfAdmin } from './../services/rolesService'
const token = localStorage.getItem(TOKEN_NAME)

const AdminRoutes = () => {  
    const[loading,setLoading]=useState(true);
    const [isAdmin, setAdmin] =useState(false)
    
    useEffect(() => {
        checkIfAdmin().then(result => {
            setAdmin(result)
            setLoading(false)
        })
    }, [])
    if(loading) return <div>Loading...</div>
    return(
        
        (token && isAdmin) ? 
        <Outlet/> 
        : <Navigate to="/login"/>
    )
}

export default AdminRoutes