import React from 'react'

function Card(e) {
  return (
    <div className='Card' style={{background:e.content.background}}>
        <div className='subtitle'>
           {e.content.title}
        </div>
        <div className='count'>
        {e.content.count}
        </div>
    </div>
  )
}

export default Card