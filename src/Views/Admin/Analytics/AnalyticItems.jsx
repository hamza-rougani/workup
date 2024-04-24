import React from 'react'
import AnalyticItem from './AnalyticItem'
const dataanalytics = [
    {icon:'view.png',count:234,subtitle:'Sessions',background:'#0f83dc'},
    {icon:'group.png',count:134,subtitle:'Visitors',background:'#1dd70c'},
    {icon:'pageviews.png',count:400,subtitle:'Pageviews',background:'#cb9d06'},
    {icon:'bounce.png',count:'80%',subtitle:'Bounce Rate',background:'#f16f37'},
]
function AnalyticItems() {
  return (
    <div className='analytics_items'>
    {dataanalytics.map((i,index)=><AnalyticItem key={index} data={i}/>)}
   </div>
  )
}

export default AnalyticItems