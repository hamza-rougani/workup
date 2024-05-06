import React from 'react'
import ReactWhatsapp from 'react-whatsapp'
function Whatsapp() {
  return (
    <ReactWhatsapp number='+212 767287673' message="I am, interesed" className='Whatsapp'>
            <img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/wts.png`} alt="" />
    </ReactWhatsapp>
  )
}

export default Whatsapp