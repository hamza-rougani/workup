import React from 'react'
import LatestBlogs from './LatestBlogs'
import Categories from './Categories'

function SideBlog() {
  return (
    <div className='SideBlog'>
        <div className='searchblog'>
            <input placeholder='search ... ' className='input i' type="text" />
            <button className='button i'><i class='bx bx-search'></i></button>
        </div>
        <h4>About Blogger</h4>
        <div className='aboutbloger'>
            
    
                <div className='pic'>
                    <img id='img' src="https://shofy-grocery.botble.com/storage/main/users/5.jpg" alt="" />
                </div>
           
            <h3>Ravi O'Leigh</h3>
            <span id='job'>Photographer & Blogger</span>
            <div className='des'>Lorem ligula eget dolor. Aenean massa. Cum sociis que penatibus magnis dis parturient</div>
            
        </div>
        <h3>Latest Posts</h3>
        <LatestBlogs/>
        <h3>Categories</h3>
        <Categories/>
    </div>
  )
}

export default SideBlog