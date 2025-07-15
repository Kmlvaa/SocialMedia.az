import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../_pages/Layout/MainLayout'
import Home from '../_pages/Home'
import AccountLayout from '../_pages/Account/AccountLayout'
import Login from '../_pages/Account/Login'
import Register from '../_pages/Account/Register'
import VerifyCode from '../_pages/Account/VerifyCode'

export default function PageRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/home' element={<Home />} />
      </Route>
      <Route path='/account' element={<AccountLayout />}>
        <Route path='/account/login' element={<Login />} />
        <Route path='/account/register' element={<Register />} />
        <Route path='/account/verifyEmail' element={<VerifyCode />} />
      </Route>
    </Routes>
  )
}
