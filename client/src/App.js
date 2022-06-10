import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import TopBar from './components/topbar/TopBar';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';
import Card from './components/card/Card';
import Cards from './components/cards/Cards';
import Your_Activites from './pages/your_activities/Your_Activites';
import SingleActivity from './pages/singleActivity/SingleActivity';
import { ChakraProvider, Switch } from "@chakra-ui/react";
import Register from './pages/register/Register';
import Home from './pages/home/Home'
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CreateEvent from './admin/createEvent/CreateEvent';
import Calendar from '../src/components/calender/calender'

function App() {

  const user = JSON.parse(localStorage.getItem('user'));
  var admin = false;
  if(user) {
    admin = user.data.user.isAdmin;
  }
  if(user) { console.log(user.data.user.isAdmin); }
  // const user = JSON.parse(localStorage.getItem('user')).data.user.mobile;
  // if(user) { console.log(user.data); }

  // var admin = false;
  // if(mobile == admin_mobile) {
  //   admin = true;
  // }

  if(!admin) {
    return (
      <Router>
        <ChakraProvider>
        <div className="page-container">
          <div className='content-wrap'>
            <TopBar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signup" element={user ? <Home/> : <SignUp/>}/>
              <Route path="/login" element = {user ? <Home/> : <SignIn/>}/>
              <Route path="/profile" element={user ? <Profile/> : <SignUp/>}/>
              <Route path="/event" element={user ? <Your_Activites/> : <SignUp/>}/>
              <Route path="/calendar" element={user ? <Calendar/> : <SignUp/>}/>
              <Route path="/register" element={user ? <Register/> : <SignUp/>}/>
              <Route path="events/:eventId" element={user ? <SingleActivity/> : <SignUp/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
        </ChakraProvider>
        </Router>
    );
  } else {
    return (
      <Router>
          <ChakraProvider>
          <div className="page-container">
            <div className='content-wrap'>
              <TopBar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/createEvent" element={<CreateEvent/>}/>
              </Routes>
            </div>
            <Footer/>
          </div>
          </ChakraProvider>
      </Router>
    );
  }
}

export default App;
