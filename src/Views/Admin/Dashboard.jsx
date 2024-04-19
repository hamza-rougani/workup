import React from 'react'
import Destination from '../../Components/Destination'
import Cards from './Cards'

function Admin() {

  return (
    <div className='Dashboard'>
        <Destination property={{microservice:'Admin',section:'Dashboard'}}/>
        <div className='content'>
          <div className='count_dashboard'>
            <Cards/>
          </div>
        </div>
    </div>
  )
}

export default Admin