import './App.css';
import Head from './component/layout/Header/Head'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Foot from './component/layout/Footer/Foot'
import Home from './component/Home/Home.js'
import Productdetails from './component/Product/Productdetails.js'
import Products from './component/Product/Products.js'
import Search from './component/Product/Search.js'
import LoginSigup from './component/User/LoginSigup'
import store from './store'
import React from 'react';
import { load } from './actions/Useract';
import Useroption from './component/layout/Header/Useroption.js'
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import Profile from './component/User/Profile.js'
import ProtectedRoute from './component/Rote/ProtectedRoute'


function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {

    store.dispatch(load());

  }, [])
  return (
    <>
      <Router>
        <Head />
        {isAuthenticated && <Useroption user={user} />}

        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/product/:id' element={<Productdetails />}></Route>
          <Route exact path='/products' element={<Products />}></Route>
          <Route exact path='/products/:keyword' element={<Products />}></Route>
          <Route exact path='/Search' element={<Search />}></Route>
          <Route exact path='/login' element={<LoginSigup />}></Route>
          <Route exact path='/account' element={<Profile />}></Route>
        </Routes>
        <Foot />
      </Router>
      {/* <React.Fragment><Router>
        <Routes>
          <ProtectedRoute exact path='/account' element={<Profile />}></ProtectedRoute>
        </Routes></Router></React.Fragment> */}
    </>
  );
}

export default App;
