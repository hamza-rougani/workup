import React from 'react'
import Status from './Status'
import Categories from './Categories'
import Tags from './Tags'
import UploadImage from './UploadImage'

function Features(ev) {
    
  return (
    <div className='Features'>
       <Status setStatus={ev.setStatus}/>
       <Categories setCategorie={ev.setCategorie}/>
       <UploadImage setImage={ev.setImage}/>
       <Tags setTag={ev.setTags}/>
    </div>
  )
}

export default Features