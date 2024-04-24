import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Admin_Layout from './Layouts/Admin_Layout'
import Dashboard from './Views/Admin/Dashboard'
import Guest_Layout from './Layouts/Guest_Layout'
import SingleProduct from './Views/ProductPage/SingleProduct'
import ReactGa from 'react-ga'
import Products from './Views/Admin/Ecommerce/Products/Products'
import Createproduct from './Views/Admin/Ecommerce/Products/Createproduct'
import Homepage from './Views/Homepage/Homepage'
import ContainerBlogs from './Views/Blogs/ContainerBlogs'
import Contact from './Views/Contact/Contact'
// import Scrolltop from './Components/Scrolltop'
const trackingCode = 'G-28WQ3FGMYE'
ReactGa.initialize(trackingCode)
function RoutesApp() {
  return (
    <Routes>
      {/* <Scrolltop /> */}
      {/* space of guest */}
      <Route path='/' element={<Guest_Layout/>}>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/products' element={<SingleProduct/>}/>
            <Route path='/blogs' element={<ContainerBlogs/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Route>
        {/* space of super admin */}
        <Route path='/' element={<Admin_Layout/>}>
            <Route path='/admin' element={<Dashboard/>}/>
            <Route path='/admin/ecommerce/products' element={<Products/>}/>
            <Route path='/admin/ecommerce/products/create' element={<Createproduct/>}/>
        </Route>
        {/* space of admin */}
    </Routes>
  )
}

export default RoutesApp