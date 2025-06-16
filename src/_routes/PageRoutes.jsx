import React from 'react'
import { Route, Routes } from 'react-router'
import MainLayout from '../_pages/Layout/MainLayout'
import Home from '../_pages/Home'

export default function PageRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/home' element={<Home />}/>
      </Route>
    </Routes>
  )
}
