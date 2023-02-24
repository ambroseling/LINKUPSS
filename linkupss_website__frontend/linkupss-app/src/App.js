import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import SideBar from './components/sidebar';
import React, { Component,useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { Redirect,Route,Router } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import LoginRegister from './components/loginregister/loginregister';
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from './components/about-us/about-us';
import Products from './components/products/products';
import SetUp from './components/set-up/setUp';
import LatestNews from './components/latest-news/lastestNews';
import FAQ from './components/faq';
import Home from './components/home/home';
import TestCreateSession from './components/dashboard/testCreateSession';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticipantRegister from './components/loginregister/participantRegister';
import Participants from './components/participants/participants';
import Footer from './components/footer';
import ResetYourPassword from './components/loginregister/resetpassword';
import { AuthProvider } from './contexts/AuthContext';
//EVERYTHING IS IN CAMEL CASE!!!  
function App() {
  document.body.style.backgroundColor = "#dbe3ff";
  document.body.style.margin = "0";
  return (
    <AuthProvider>

    <div className="box">
    <NavBar/>
    <div className="content">
    <Switch>
    <Route path="/faq" component={FAQ}/> 
    <Route path="/products" component={Products}/> 
    <Route path="/setup" component={SetUp}/> 
    <Route path="/latestnews" component={LatestNews}/> 
    <Route path="/aboutus" component={AboutUs}/> 
    <Route path="/adminloginregister" component={LoginRegister}/> 
    <Route path="/resetyourpassword" component={ResetYourPassword}/> 
    <Route path="/participantregister" component={ParticipantRegister}/> 
    <Route path="/dashboard" component={Dashboard}/> 
    <Route path="/participants" component = {Participants}/>
    <Route path="/" component={Home}/> 
    </Switch>
    </div>
    {/* <Footer className = "footerpos"/> */}
    </div>
    </AuthProvider>
    
  );
}

export default App;
