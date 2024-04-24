import { useState } from 'preact/hooks'
import React from 'react'

function CustomCss(e) {
  const [valueinput,setvalue] = useState(JSON.stringify(e.custom.style,null,2))
  console.log(valueinput)
  return (
    <div className='CustomCSS'>
    <h3>Custom Css : ({e.item})</h3>
    <textarea onChange={(ev)=>setvalue(ev.target.value)} name="" id="" value={valueinput}></textarea>
    <button onClick={()=>e.handelCustom({style:valueinput,type:'custom'})}>Save</button>
</div>
  )
}

export default CustomCss