import { useState } from 'preact/hooks'

function Upload(ev) {

  return (
    <div className='Upload'>
       <div className='up_content'>
        <div className='note'>
        <div id='i'><i class='bx bx-question-mark'></i></div><span id='note'> Note : </span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <input type="file" onChange={(e)=>ev.handelAddvalue({image:e.target.files[0],index:ev.index})} style={{display:'none'}} id={'file'+ev.index}/>
        
        <label htmlFor={'file'+ev.index}>
        <div className='btn'><i class='bx bx-image-add'></i> Upload Image</div>
       </label>
       </div>
    </div>
  )
}

export default Upload