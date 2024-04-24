import { useEffect, useState } from 'preact/hooks'
import React from 'react'

function Form(ev) {
console.log(ev.items)

    const [placeholder,setplaceholder] =useState(['Type the full name','Type the number phone','Type the full adress'])
    const [headform,setheadform] =useState(true)
  return (
    <div className='Form' style={ev.items.container}>
         <div className='head_form'>
            <div className='image'>
               <img id='img' src={typeof(ev.items.image) != 'string' ? URL.createObjectURL(ev.items.image) : `${import.meta.env.VITE_BASE_URL}/Images/headform.png`} alt="" />
            </div>
         </div>
         <div className='formg' style={ev.items.form}>
    
           <input type="text" placeholder={ev.items.placeholder[0]}  style={ev.items.input}/>
         

           <input type="text" placeholder={ev.items.placeholder[1]}  style={ev.items.input}/>
         
           
           <input type="text" placeholder={ev.items.placeholder[2]} style={ev.items.input}/>
           
      <div className='select'>
        <h3 style={ev.items.h}>Choose the appropriate offer:</h3>
         <select  name="" id="" style={ev.items.input}>
            <option id='option' value="">{ev.items.options[0]}</option>
            <option value="">{ev.items.options[1]}</option>
         </select>
      </div>
         
          
           <button style={ev.items.button}><i class='bx bxl-telegram' ></i> Place Order</button>
           </div>
       
        
    </div>
  )
}

export default Form