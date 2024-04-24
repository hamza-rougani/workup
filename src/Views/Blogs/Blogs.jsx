import React from 'react'
import Blog from './Blog'
const blogs = [1,2,3,4,5,6,7,8,9]
function Blogs() {
  return (
    <div className='Blogs'>
        {blogs.map(()=><Blog/>)}
    </div>
  )
}

export default Blogs