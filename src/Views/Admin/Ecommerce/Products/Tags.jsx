import React from 'react'

function Tags(ev) {
  return (
    <div className='Tags Info sect'>
<div className='sec'>
       <div className='title'>
           <div className='head'>
           <span id='name'>Tags</span>
           <span id='ob'>*</span>
           </div>
           <input onChange={(e)=>ev.setTags(e.target.value)} type="text" id='att'/>
       </div>
   </div>
</div>
  )
}

export default Tags