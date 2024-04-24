import React from 'react'

function UploadImage(ev) {
  return (
    <div className='Image Info sect'>
<div className='sec'>
       <div className='title'>
           <div className='head'>
           <span id='name'>Upload Image</span>
           <span id='ob'>*</span>
           </div>
           <input onChange={(e)=>ev.setImage(e.target.files[0])} type="file" id='att'/>
       </div>
   </div>
</div>
  )
}

export default UploadImage