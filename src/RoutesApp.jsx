import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Guest_Layout from './Layouts/Guest_Layout'
import SingleProduct from './Views/ProductPage/SingleProduct'
import ReactGa from 'react-ga'
import Homepage from './Views/Homepage/Homepage'
import Contact from './Views/Contact/Contact'
import Scrolltop from './Components/Scrolltop'
import Product_Layout from './Layouts/Product_Layout'
import Messages_Layout from './Layouts/Messages_layout'
import Notfound from './Components/Messagespages/Notfound'
import Thankspage from './Components/Messagespages/Thankspage'
import Error from './Components/Messagespages/Error'
const trackingCode = 'G-28WQ3FGMYE'
ReactGa.initialize(trackingCode)
function RoutesApp() {
  return (
    <>
    <Scrolltop />
    <Routes>
      {/* space of guest */}
      <Route path='/' element={<Guest_Layout/>}>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Route>
      <Route path='/' element={<Product_Layout/>}>
            <Route path='/products/:slug' element={<SingleProduct/>}/>
        </Route>
      <Route path='/' element={<Messages_Layout/>}>
            <Route path='/thank_you' element={<Thankspage/>}/>
            <Route path='/error' element={<Error/>}/>
        </Route>
        <Route path='*' element={<Notfound />} />
    </Routes>
    </>
  )
}

export default RoutesApp