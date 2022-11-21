import React from 'react'
import {Routes, Route} from "react-router-dom";
import Cart from './Cart';
import EarPhones from './EarPhones';
import Headphones from './Headphones';
import HomePage from './HomePage';
import Login from './Login';
import Payments from './Payments';
import ProductPage from './ProductPage';
import SignUp from './SignUp';
import Speakers from './Speakers';

const MainRoutes = () => {
  return (
    <Routes>
    <Route  path='/' element={<HomePage/>} />
    <Route  path='/login' element={<Login/>} />
    <Route  path='/signup' element={<SignUp/>} />
    <Route  path='/payments' element={<Payments/>} />
    <Route  path='/headphones' element={<Headphones/>} />
    <Route  path='/earphones' element={<EarPhones/>} />
    <Route  path='/speakers' element={<Speakers/>} />
    <Route  path='/product/:id' element={<ProductPage/>}  />
    <Route  path='/cart' element={<Cart/>}  />
    </Routes>
  )
}

export default MainRoutes
