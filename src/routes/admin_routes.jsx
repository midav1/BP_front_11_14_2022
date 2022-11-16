import { Outlet, Navigate } from 'react-router-dom'
import { TOKEN_NAME, ROLE } from '../services/apiService';
const token=localStorage.getItem(TOKEN_NAME)
const role=localStorage.getItem(ROLE)
console.log(token)
console.log(role)
const AdminRoutes = () => {   


    return(
         (token && role=="admin") ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default AdminRoutes