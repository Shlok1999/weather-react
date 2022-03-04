import logo from './logo.svg';
import UserLogin from './components/userLogin.components';
import Navbar from './components/navbar.components';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import AdminLogin from './components/adminLogin.components';
import AdminRegd from './components/adminRegd.components';
import './App.css';
import UserRegd from './components/userRegd.components';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/userlogin" exact element={<UserLogin/>} />
        <Route path="/userregd" exact element={<UserRegd/>} />
        <Route path="/adminlogin" exact element={<AdminLogin/>} />
        <Route path="/adminregd" exact element={<AdminRegd/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
