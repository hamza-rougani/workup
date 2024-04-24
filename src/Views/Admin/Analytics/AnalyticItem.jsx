import React from 'react'

function AnalyticItem(e) {
  return (
    <div className='item' >
      <div className='icon' style={{background:e.data.background}}>
        <div className='pic'>
        <img id='icons' src={`${import.meta.env.VITE_BASE_URL}/Icons/${e.data.icon}`} alt="" />
        </div>
      </div>
      <div className='content_item'>
        <span>{e.data.subtitle}</span>
        <b>{e.data.count}</b>
      </div>
    </div>
  )
}

export default AnalyticItem