import React from 'react'
import {Routes, Route} from "react-router-dom";
import Headphones from './Headphones';
import HomePage from './HomePage';
import Login from './Login';
import Payments from './Payments';
import SignUp from './SignUp';

const MainRoutes = () => {
  return (
    <Routes>
    <Route  path='/' element={<HomePage/>} />
    <Route  path='/login' element={<Login/>} />
    <Route  path='/signup' element={<SignUp/>} />
    <Route  path='/payments' element={<Payments/>} />
    <Route  path='/headphones' element={<Headphones/>} />

  
    </Routes>
  )
}

export default MainRoutes
