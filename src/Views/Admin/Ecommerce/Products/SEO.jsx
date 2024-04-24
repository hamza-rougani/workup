import React from 'react'

function SEO(ev) {
  return (
    <div className='SEO sect'>
     
                <div className='title'>
                    <div className='head'>
                    <span id='name'>SEO Title</span>
                    <span id='ob'>*</span>
                    </div>
                    <input onChange={(e)=>ev.setSEO({...ev.SEOs,title:e.target.value})} placeholder='Title' id='att' type="text" />
                </div>
                <div className='title'>
                    <div className='head'>
                    <span id='name'>SEO Description</span>
                    <span id='ob'>*</span>
                    </div>
                    <textarea onChange={(e)=>ev.setSEO({...ev.SEOs,description:e.target.value})} name="" id="att" cols="30" rows="5"></textarea>
                 </div>
                <div className='title'>
                    <div className='head'>
                    <span id='name'>SEO Image</span>
                    <span id='ob'>*</span>
                    </div>
                    <input onChange={(e)=>ev.setSEO({...ev.SEOs,image:e.target.files[0]})} type="file" />         
                      </div>
                <div className='title'>
                    <div className='head'>
                    <span id='name'>Index</span>
                    <span id='ob'>*</span>
                    </div>
                    <div className='indexSEO'>
                       <input type="radio" value='index' onChange={(e)=>ev.setSEO({...ev.SEOs,index:e.target.value})} name='index'/> <span>Index</span>         
                    <input type="radio" value='no index' onChange={(e)=>ev.setSEO({...ev.SEOs,index:e.target.value})} name='index'/>  <span>No Index</span>
                    </div>
                            
                      </div>
                
          
    </div>
  )
}

export default SEO