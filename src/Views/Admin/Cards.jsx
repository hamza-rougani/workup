import React from 'react'
import Card from './Card'
const cards = [
    {title:'Commandes',count:50,background:'rgb(36, 222, 182)'},
 {title:'En coure',count:20,background:'rgb(111, 195, 16)'},
    {title:'Confirmer',count:20,background:'rgb(103, 16, 195)'},
    {title:'Annuler',count:10,background:'rgb(195, 16, 100)'},
]
function Cards() {
  return (
    <div className='Cards'>
        {
            cards.map((v,index)=><Card content={v} key={index}/>)
        }
    </div>
  )
}

export default Cards