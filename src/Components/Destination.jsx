import React from 'react'

function Destination(e) {
  return (
    <div className='Destination'>
        <span>{e.property.microservice}</span>
        <span>/</span>
        <span id='section'>{e.property.section}</span>
    </div>
  )
}

export default Destination