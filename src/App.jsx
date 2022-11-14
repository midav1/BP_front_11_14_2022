
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HeaderAdmin from './comps_admin/headerAdmin';
import LoginAdmin from './comps_admin/loginAdmin';
import UsersList from './comps_admin/users/usersList';
import CategoriesList from './comps_admin/categories/categoriesList';
import AddCategoryForm from './comps_admin/categories/addCategoryForm';
import EditCategory from './comps_admin/categories/editCategory';
import FoodsList from './comps_admin/foods/foodsList';
import Header from './comps_user/header';
import Login from './comps_user/login';
import SignUp from './comps_user/signUp';
import Home from './comps_user/home';
import Header_mishtamesh from './comps_mishtamesh/header_mishtamesh';
import CheckAdminComp from './comps_admin/checkAdminComp';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/admin/*" element={<HeaderAdmin />} />
        <Route path="/user/*" element={<Header_mishtamesh />} />
        <Route path="/*" element={<Header />} />
      </Routes>

    
      <Routes>
        {/* GUEST ROUTES */}
        <Route index element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>

      <Routes>
        {/* USER ROUTES */}
        <Route path='/user' element={<Header_mishtamesh />} />
      </Routes>

      <Routes>
        
        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/categories" element={<CategoriesList />} />
        <Route path="/admin/addCategory" element={<AddCategoryForm />} />
        <Route path="/admin/editCategory/:id" element={<EditCategory />} />
        <Route path="/admin/foods" element={<FoodsList />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
