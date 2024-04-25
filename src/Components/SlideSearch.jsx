import React from 'react'
const handelSlideMenu = ()=>{
    document.body.classList.remove('SlideSearchAc')
}
function SlideSearch() {
  return (
    <div className='SlideSearch'>
    <div className="headerMenu">
            <div className='logowebsite'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/logooff.png`} alt="" /></div>
            <button onClick={()=>handelSlideMenu()} className='close'><i class='bx bx-x'></i></button>
        </div>
        <div className='search'>
            <input placeholder='Search for Products ...' type="text" />
            <button id='ic'><i class='bx bx-search'></i></button>
        </div>
    </div>
  )
}

export default SlideSearch