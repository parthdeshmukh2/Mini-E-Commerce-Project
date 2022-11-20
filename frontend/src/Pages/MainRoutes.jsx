import React from 'react'
import {Routes, Route} from "react-router-dom";
import Cart from './Cart';
import Headphones from './Headphones';
import HomePage from './HomePage';
import Login from './Login';
import Payments from './Payments';
import ProductPage from './ProductPage';
import SignUp from './SignUp';

const MainRoutes = () => {
  return (
    <Routes>
    <Route  path='/' element={<HomePage/>} />
    <Route  path='/login' element={<Login/>} />
    <Route  path='/signup' element={<SignUp/>} />
    <Route  path='/payments' element={<Payments/>} />
    <Route  path='/headphones' element={<Headphones/>} />
    <Route  path='/product/:id' element={<ProductPage/>}  />
    <Route  path='/cart' element={<Cart/>}  />
    </Routes>
  )
}

export default MainRoutes
