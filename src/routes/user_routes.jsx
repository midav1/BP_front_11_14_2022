import { Outlet, Navigate } from 'react-router-dom'
import { TOKEN_NAME, ROLE } from '../services/apiService';
const token=localStorage.getItem(TOKEN_NAME)
const role=localStorage.getItem(ROLE)
const UserRoutes = () => {
   
    return(
        (token && role=="user")? <Outlet/> : <Navigate to={"/login"}/>
    )
}

export default UserRoutes


  
