
import './App.css';
import {BrowserRouter,Routes,Route,Switch} from "react-router-dom"
import HeaderAdmin from './comps_admin/headerAdmin';
import LoginAdmin from './comps_admin/loginAdmin';
import UsersList from './comps_admin/users/usersList';
import CategoriesList from './comps_admin/categories/categoriesList';
import AddCategoryForm from './comps_admin/categories/addCategoryForm';
import EditCategory from './comps_admin/categories/editCategory';
import FoodsList from './comps_admin/foods/foodsList';
import Header from './comps_quest/header';
import Login from './comps_quest/login';
import SignUp from './comps_quest/signUp';
import Home from './comps_quest/home';
import HeaderUser from './comps_user/headerUser';
import ItemList from './comps_user/myitems/itemList';
import AddItemForm from './comps_user/myitems/addItemForm';
import MyInfo from './comps_user/myinfo/myInfo';
import MyInfoEdit from './comps_user/myinfo/myInfoEdit';
import AdminRoutes from './routes/admin_routes';
import UserRoutes from './routes/user_routes';
import AllFoods from './comps_admin/foods/allFoods';
import Upload from './services/uploadService';
function App() {
  return (   
    <BrowserRouter>
      {/* CLIENT  */}
      <Routes>
        {/* <Route path="/admin/*" element={<HeaderAdmin />} />
        <Route path="/user/*" element={<HeaderUser />} />
        <Route path="/*" element={<Header />} /> */}
      </Routes>
    {/* GUEST ROUTES */}
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    {/* CLIENT ROUTES */}
    <Routes>
        <Route element={<UserRoutes/>}>
          <Route path='/user/' element={<HeaderUser />} />
         <Route path='/user/myinfo' element={<MyInfo/>} />
         <Route path='/user/myinfo/edit' element={<MyInfoEdit/>}/>
         <Route path='/user/myitems' element={<ItemList/>}/>
         <Route path='/user/myitems/additem' element={<AddItemForm/>}/>
         <Route path='/user/upload' element={<Upload/>}/>
       </ Route>
      </Routes>
      <Routes>
        {/* ADMIN ROUTES */}
        <Route element={<AdminRoutes/>}>   
        <Route path="/admin" element={<HeaderAdmin />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/categories" element={<CategoriesList />} />
        <Route path="/admin/addCategory" element={<AddCategoryForm />} />
        <Route path="/admin/editCategory/:id" element={<EditCategory />} />
        <Route path="/admin/foods" element={<FoodsList />} />
        <Route path="/admin/allfoods" element={<AllFoods/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
