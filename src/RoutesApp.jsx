import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Admin_Layout from './Layouts/Admin_Layout'
import Dashboard from './Views/Admin/Dashboard'
import Guest_Layout from './Layouts/Guest_Layout'
import SingleProduct from './Views/ProductPage/SingleProduct'
import ReactGa from 'react-ga'
const trackingCode = 'G-28WQ3FGMYE'
ReactGa.initialize(trackingCode)
function RoutesApp() {
  return (
    <Routes>
        <Route path='/' element={<Admin_Layout/>}>
            <Route path='/admin' element={<Dashboard/>}/>
        </Route>
        <Route path='/' element={<Guest_Layout/>}>
            <Route path='/singleproduct' element={<SingleProduct/>}/>
        </Route>
    </Routes>
  )
}

export default RoutesApp