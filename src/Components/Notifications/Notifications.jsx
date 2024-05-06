import React from 'react'

function Error(e) {
  return (
    <div className='Notifications'>
      {
        e.field.status=='error' && 
        <div className='cardmessage Error'>
        <i id='iconerr' class='bx bx-error-alt' ></i>
        <span id='message'>{e.field.message}</span>
        </div>
      }
  
      {
        e.field.status=='warning' && 
        <div className='cardmessage warning'>
        <i class='bx bx-bell'></i>
        <span id='message'>{e.field.message}</span>
        </div>
      }
      {
        e.field.status=='sucess' && 
        <div className='cardmessage success'>
        <i id='iconerr' class='bx bx-error-alt' ></i>
        <span id='message'>{e.field.message}</span>
        </div>
      }
  
    </div>
  )
}

export default Error