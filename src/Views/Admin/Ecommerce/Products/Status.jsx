import React from 'react'

function Status(ev) {
  return (
    <div className='Status Info sect'>
         <div className='sec'>
                <div className='title'>
                    <div className='head'>
                    <span id='name'>Status</span>
                    <span id='ob'>*</span>
                    </div>
                    <select name="" id="att" onChange={(e)=>ev.setStatus(e.target.value)}>
                        <option value="Published">Published</option>
                        <option value="Draft">Draft</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>
            </div>
    </div>
  )
}

export default Status