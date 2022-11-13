import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import SideBar from './components/sidebar';
import React, { Component,useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { Redirect,Route } from 'react-router-dom';
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
import 'bootstrap/dist/css/bootstrap.min.css';
//EVERYTHING IS IN CAMEL CASE!!!  
function App() {
  return (
    <div className="box">
    <NavBar className="navpos"/>
    <div className="content">
    
    <Switch>
    <Route path="/faq" component={FAQ}/> 
    <Route path="/products" component={Products}/> 
    <Route path="/setup" component={SetUp}/> 
    <Route path="/latestnews" component={LatestNews}/> 
    <Route path="/aboutus" component={AboutUs}/> 
    <Route path="/loginregister" component={LoginRegister}/> 
    <Route path="/dashboard" component={Dashboard}/> 
    <Route path="/" component={Home}/> 
    </Switch>
    </div>
    </div>
  );
}

export default App;
