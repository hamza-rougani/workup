import { useState } from 'preact/hooks'
import React from 'react'

function EditElement(ev) {
    const [custom,setCustom] = useState(JSON.stringify(ev.items[ev.index].style,null,2))
    const handelsetvalue = (e)=>{
switch (e.type) {
    case 'content':
        ev.setItems((el) => {
            const newItems = [...el]
            newItems[ev.index].content = e.value
            return newItems
          })
        break;
    case 'sumicontent':
        ev.setItems((el) => {
            const newItems = [...el]
            newItems[ev.index].sumicontent = e.value
            return newItems
          })
        break;
    case 'background':
        ev.setItems((el) => {
            const newItems = [...el]
            newItems[ev.index].style = {...newItems[ev.index].style,background:e.value}
            setCustom(JSON.stringify(newItems[ev.index].style,null,2))
            return newItems
          })
        break;
    case 'color':
        ev.setItems((el) => {
            const newItems = [...el]
            newItems[ev.index].style = {...newItems[ev.index].style,color:e.value}
            setCustom(JSON.stringify(newItems[ev.index].style,null,2))
            return newItems
          })
        break;
    case 'borderraduis':
        ev.setItems((el) => {
            const newItems = [...el]
            newItems[ev.index].style = {...newItems[ev.index].style,borderRadius:e.value}
            setCustom(JSON.stringify(newItems[ev.index].style,null,2))
            return newItems
          })
        break;
    case 'style':
        setCustom(e.value)
        ev.setItems((el) => {
            const newItems = [...el]
            newItems[ev.index].style =JSON.parse(e.value) 
            return newItems
          })
        break;
 
    default:
        
        break;
}
 
    }
const handelDelete = ()=>{

    if (ev.items.length>0) {
         ev.setItems((el) => {
        const Newitems = [...el];
      return Newitems.filter((it, index) => index != ev.index)
      })    
        ev.setcheckelement({type:'f',index:''})

    }
   
}
  return (
    <div className='EditElement'>
<div className='headEdit'>
<button id='closeEdit' onClick={()=>ev.setcheckelement({type:'f',index:''})}><i class="bx bx-chevron-left"></i></button>
<div className='rightbtn'>
<button onClick={()=>handelDelete()} className='btn delete'><i class='bx bx-x'></i> Delete</button>
<button className='btn reset'><i class='bx bx-loader-alt'></i> Reset</button>
<button className='btn save'><i class='bx bx-save' ></i> Save</button>
</div>
</div>
        <div className='changeprop'>
            <b>Content</b>
            <input id='content' onChange={(e)=>handelsetvalue({value:e.target.value,type:'content'})} value={ev.items[ev.index].content} type="text" placeholder='type content here'/>
        </div>
        <div className='changeprop'>
            <b>Sumi Content</b>
            <input id='content' onChange={(e)=>handelsetvalue({value:e.target.value,type:'sumicontent'})}  value={ev.items.sumicontent} type="text" placeholder='type content here'/>
        </div>
        <div className='changeprop'>
            <b>Background</b>
            <div className='back'>
                <input id='color' type="color" onChange={(e)=>handelsetvalue({value:e.target.value,type:'background'})} value={ev.items[ev.index].style.background}/>
                <input id='colorvalue' onChange={(e)=>handelsetvalue({value:e.target.value,type:'background'})} value={ev.items[ev.index].style.background}  type="text"/>
                {/* <input id='opacity' value='70%' type="text" /> */}
            </div>
        </div>
        <div className='changeprop'>
            <b>Text Color</b>
            <div className='back'>
                <input id='color' type="color" onChange={(e)=>handelsetvalue({value:e.target.value,type:'color'})} value={ev.items[ev.index].style.color}/>
                <input id='colorvalue'  type="text" onChange={(e)=>handelsetvalue({value:e.target.value,type:'color'})} value={ev.items[ev.index].style.color}/>
                {/* <input id='opacity' value='70%' type="text" /> */}
            </div>
        </div>
        <div className='changeprop'>
            <b>Corner Raduis</b>
            <div className='back corner'>
            <i class='bx bx-collapse-vertical'></i>
                <input id='opacity' value={ev.items[ev.index].style.borderRadius} onChange={(e)=>handelsetvalue({value:e.target.value,type:'borderraduis'})}  type="text" />
            </div>
        </div>
        <div className='changeprop'>
            <b>Position</b>
            <div className='back corner'>
             <span><input name='a' type="radio" /> Left </span>
             <span><input name='a' type="radio" /> Center </span>
             <span><input name='a' type="radio" /> Right </span>
            </div>
        </div>
        <div className='changeprop'>
            <b>Custom Css</b>
            <div className='back corner'>
            <textarea onChange={(e)=>setCustom(e.target.value)} value={custom} name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button onClick={(e)=>handelsetvalue({value:custom,type:'style'})} className='custom'>Apply css</button>

        </div>
    </div>
  )
}

export default EditElement