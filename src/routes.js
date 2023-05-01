import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard, { DashboardLoader } from './pages/Dashboard'
import { Error } from './pages/Error'

function Routing() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} loader={DashboardLoader} >
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing