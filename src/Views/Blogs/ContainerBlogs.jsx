import React from 'react'
import Blogs from './Blogs'
import SideBlog from './SideBlog'

function ContainerBlogs() {
  return (
    <div className='ContainerBlogs'>
        <h1>Blogs</h1>
        <div className='ContainerB'>
           <Blogs/>
           <SideBlog/>
        </div>
    </div>
  )
}

export default ContainerBlogs