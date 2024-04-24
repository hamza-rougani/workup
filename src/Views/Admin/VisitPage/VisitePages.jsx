import React from 'react'
import Topvisitpage from './Topvisitpage'
const parties = [
    {title:'Top Most Visit Pages'},
    {title:'Top Browsers'},
    {title:'Top Referrers'},
    {title:'Recent Posts'},
]
function VisitePages() {
  return (
    <div className='VisitePages'>
         {parties.map((v,index)=><Topvisitpage key={index} value={v}/>)}
    </div>
  )
}

export default VisitePages