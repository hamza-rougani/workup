import { useState } from 'preact/hooks'
import React from 'react'



function Editform(ev) {
   const [section,setsection] = useState('header')
   const [custominput,setCustominput] = useState(JSON.stringify(ev.items.input,null,2))
   const [custombutton,setCustombutton] = useState(JSON.stringify(ev.items.button,null,2))
   const handelsetvalue = (e)=>{
    switch (e.type) {
        case 'image':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].image = e.value
                return newItems
              })
            break;
        case 'pl1':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].placeholder[0] = e.value
                return newItems
              })
            break;
        case 'pl2':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].placeholder[1] = e.value
                return newItems
              })
            break;
        case 'pl3':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].placeholder[2] = e.value
                return newItems
              })
            break;
        case 'option1':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].options[0] = e.value
                return newItems
              })
            break;
        case 'option2':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].options[1] = e.value
                return newItems
              })
            break;
        case 'background':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].input = {...newItems[ev.index].input,background:e.value}
                return newItems
              })
            break;
        case 'color':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].input = {...newItems[ev.index].input,color:e.value}
                return newItems
              })
            break;
        case 'borderRadius':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].input = {...newItems[ev.index].input,borderRadius:e.value}
                return newItems
              })
            break;
        case 'inputstyle':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].input = JSON.parse(e.value) 
                return newItems
              })
            break;
        case 'buttonstyle':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].button = JSON.parse(e.value) 
                return newItems
              })
            break;
        case 'colorbutton':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].button = {...newItems[ev.index].button,color:e.value}
                return newItems
              })
            break;
        case 'backgroundbutton':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].button = {...newItems[ev.index].button,background:e.value}
                return newItems
              })
            break;
        case 'borderRadiusbutton':
            ev.setItems((el) => {
                const newItems = [...el]
                newItems[ev.index].button = {...newItems[ev.index].button,borderRadius:e.value}
                return newItems
              })
            break;
        
    }
}
const handelDelete = ()=>{

    if (ev.items1.length>0) {
         ev.setItems((el) => {
        const Newitems = [...el];
      return Newitems.filter((it, index) => index != ev.index)
      })    
        ev.setcheckelement({type:'f',index:''})

    }
   
}
  return (
    <div className='EditElement Editform'>
<div className='headEdit'>
<button id='closeEdit' onClick={()=>ev.setcheckelement({type:'f',index:''})}><i class="bx bx-chevron-left"></i></button>
<div className='rightbtn'>
<button onClick={()=>handelDelete()} className='btn delete'><i class='bx bx-x'></i> Delete</button>
<button className='btn reset'><i class='bx bx-loader-alt'></i> Reset</button>
<button className='btn save'><i class='bx bx-save' ></i> Save</button>
</div>
</div>
<div className='classsection'>
    <button onClick={()=>setsection('header')}>Header</button>
    <button onClick={()=>setsection('inputs')}>Inputs</button>
    <button onClick={()=>setsection('button')}>Button</button>
</div>
{section == 'inputs' ? 
<div className='inputs'>
  <div className='changeprop'>
            <b>Placeholder (fullname)</b>
            <input id='content' onChange={(e)=>handelsetvalue({value:e.target.value,type:'pl1'})} value={ev.items.placeholder[0]}  type="text" placeholder='Placehoder full name'/>
        </div>
<div className='changeprop'>
            <b>Placeholder (phone number)</b>
            <input id='content' onChange={(e)=>handelsetvalue({value:e.target.value,type:'pl2'})} value={ev.items.placeholder[1]}  type="text" placeholder='Placehoder phone number'/>
        </div>
<div className='changeprop'>
            <b>Placeholder (address)</b>
            <input id='content' onChange={(e)=>handelsetvalue({value:e.target.value,type:'pl3'})} value={ev.items.placeholder[2]}  type="text" placeholder='Placehoder Address'/>
        </div>  
<div className='changeprop'>
            <b>Option 1</b>
            <input id='content' onChange={(e)=>handelsetvalue({value:e.target.value,type:'option1'})} value={ev.items.options[0]}   type="text" placeholder='Select option 1'/>
        </div>  
<div className='changeprop'>
            <b>Option 2</b>
            <input id='content' onChange={(e)=>handelsetvalue({value:e.target.value,type:'option2'})} value={ev.items.options[1]} type="text" placeholder='Select option 2'/>
        </div>  
        <div className='changeprop'>
            <b>Background</b>
            <div className='back'>
                <input id='color' onChange={(e)=>handelsetvalue({value:e.target.value,type:'background'})} value={ev.items.input.background} type="color" />
                <input id='colorvalue' onChange={(e)=>handelsetvalue({value:e.target.value,type:'background'})} value={ev.items.input.background}   type="text"/>
          
            </div>
        </div>
        <div className='changeprop'>
            <b>Text Color</b>
            <div className='back'>
            <input id='color' onChange={(e)=>handelsetvalue({value:e.target.value,type:'color'})} value={ev.items.input.color} type="color" />
                <input id='colorvalue' onChange={(e)=>handelsetvalue({value:e.target.value,type:'color'})} value={ev.items.input.color}   type="text"/>
        </div>
        </div>
            <div className='changeprop'>
            <b>Corner Raduis</b>
            <div className='back corner'>
            <i class='bx bx-collapse-vertical'></i>
                <input id='opacity' onChange={(e)=>handelsetvalue({value:e.target.value,type:'borderRadius'})} value={ev.items.input.borderRadius}  type="text" />
            </div>
            </div>

            <div className='changeprop'>
            <b>Custom Css</b>
            <div className='back corner'>
            <textarea onChange={(e)=>setCustominput(e.target.value)} value={custominput} name="" id="" cols="30" rows="10"></textarea>
            </div>
            </div>
            <button onClick={(e)=>handelsetvalue({value:custominput,type:'inputstyle'})} className='custom'>Apply css</button>

</div>
: ''}


{/* header image */}

{section == 'header' ? <div className='header'>
<div className='changeprop'>
            <b>Upload Iamge</b>
            <input onChange={(e)=>handelsetvalue({type:'image',value:e.target.files[0]})} id='content'  type="file"/>
        </div>
</div> : ''}
{section == 'button' ? <div className='button'>
<div className='changeprop'>
            <b>Content</b>
            <input id='content'  type="text" placeholder='content'/>
        </div>
<div className='changeprop'>
            <b>Background</b>
            <div className='back'>
            <input id='color' onChange={(e)=>handelsetvalue({value:e.target.value,type:'backgroundbutton'})} value={ev.items.button.background} type="color" />
                <input id='colorvalue' onChange={(e)=>handelsetvalue({value:e.target.value,type:'backgroundbutton'})} value={ev.items.button.background}   type="text"/>
        </div>
        </div>
        <div className='changeprop'>
            <b>Text Color</b>
            <div className='back'>
            <input id='color' onChange={(e)=>handelsetvalue({value:e.target.value,type:'colorbutton'})} value={ev.items.button.color} type="color" />
                <input id='colorvalue' onChange={(e)=>handelsetvalue({value:e.target.value,type:'colorbutton'})} value={ev.items.button.color}   type="text"/>
        </div>
        </div>
            <div className='changeprop'>
            <b>Corner Raduis</b>
            <div className='back corner'>
            <i class='bx bx-collapse-vertical'></i>
                <input id='opacity' onChange={(e)=>handelsetvalue({value:e.target.value,type:'borderRadiusbutton'})} value={ev.items.button.borderRadius}  type="text" />
            </div>
            </div>
            <div className='changeprop'>
            <b>Custom Css</b>
            <div className='back corner'>
            <textarea onChange={(e)=>setCustombutton(e.target.value)} value={custombutton} name="" id="" cols="30" rows="10"></textarea>
            </div>
            </div>
            <button onClick={(e)=>handelsetvalue({value:custombutton,type:'buttonstyle'})} className='custom'>Apply css</button>

       
          
</div> : ''}
    </div>
  )
}

export default Editform