import React from 'react'
import Products from './Products'
import Reviews from './Reviews'
import Introduct from './Introduct'
import Guides from './Guides'
import SwiperAuto from '../../Components/Swipers/SwiperAuto'
import Cardofreviews from './Cardofreviews'

function Homepage() {
  return (
    <div className='Homepage'>
        <Introduct/>
        <SwiperAuto/>
        <div className='containerHome'>
        <Products/>
        <Reviews/>
        <Cardofreviews/>
        <Guides/>
        </div>
    </div>
  )
}

export default Homepage