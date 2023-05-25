import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './homePage/Home';
import Login from './homePage/credentials/Login';
import SignUp from './homePage/credentials/SignUp';
import { create } from 'zustand';
import Display from './homePage/display/Display';
import AdminDashBoard from './homePage/admin/AdminDashboard';
import CategoryPage from './homePage/display/CategoryPage';
import AdvertiseRegistory from './homePage/credentials/AdvertiseRegistory';
import UserDashboard from './homePage/userDisplay/UserDashboard';

export const usersStore = create((set) => ({
  // users: [],
  // updateUsers: (val) => set((state) => ({ users: [...state.users, [val]] })),

  // accUser: [],
  // updateAccUser: (u)=>set(()=>({accUser: [u]})),

  // success: "false",
  // updateSuces: (s)=>set(()=>({success: s})),

  selectedCategory: "",
  updateSelectedCategory: (s)=>set(()=>({selectedCategory: s})),

}))
const privateRoot= ({ path, component,  })=>{
return <Route path={path} />
}
 const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/display" element={<Display />} />
        <Route path="/admindashboard" element={<AdminDashBoard />} />
        <Route path='/categorypage' element={<CategoryPage/>}/>
        <Route path='/advertise' element={<AdvertiseRegistory />}/>
        <Route path='/userdashboard' element={<UserDashboard/>}/>
      </Routes>
    </div>
  );
}
export default App;