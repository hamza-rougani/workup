import React from 'react'
import Listofproducts from './Listofproducts'
import { Link } from 'react-router-dom'

function Products() {
    
  return (
    <div className='Products'>
        <div className='filter'>
            <div className='side'>
            <button id='filter'><i class='bx bx-filter'></i>Filter by</button>
            <input id='search' type="text" placeholder='Search...'/>
            <button id='load'><i class='bx bx-revision'></i> Reload</button>
        </div>
        <div className='side'>
            <Link to='/admin/ecommerce/products/create'><button id='new'><i class='bx bx-plus'></i> New Product</button></Link>
        </div>
        </div>
        <Listofproducts/>
    </div>
  )
}

export default Products