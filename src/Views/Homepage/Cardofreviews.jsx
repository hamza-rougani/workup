import React from 'react'
import Cardofreview from './Cardofreview'
const rev = [1,2,3,3,3,3]
function Cardofreviews() {
  return (
    <div className='Cardofreviews'>
       {rev.map(()=><Cardofreview/>)}
    </div>
  )
}

export default Cardofreviews