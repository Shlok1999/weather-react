import logo from './logo.svg';
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.components';
import './App.css';
import { useState } from 'react';
import AdminLogin from './components/adminpage/admin.login';
import AdminRegd from './components/adminpage/admin.register';
import AdminHome from './components/adminpage/admin.home';
import UserRegd from './components/userpage/user.regd';
import UserLogin from './components/userpage/user.login';
import UserHome from './components/userpage/user.home';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/admin" exact element={<AdminLogin/>}/>
          <Route path = "/admin/signup" exact element={<AdminRegd/>}/>
          <Route path = "/admin/addTempData" element={<AdminHome/>}/>
          <Route path = "/user/signup" element={<UserRegd/>}/>
          <Route path = "/user" element={<UserLogin/>}/>
          <Route path = "/user/getData" element={<UserHome/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
