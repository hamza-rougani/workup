import React from 'react'
import { useNavigate } from 'react-router-dom'
import { errorpage } from '../../Admin/MessagePages/MessagePages'
import { useState } from 'preact/hooks'
import { useTranslation } from 'react-i18next'
function Error() {
  const navigate = useNavigate()
  const [message,setMessage] = useState(localStorage.getItem('lan'))
  const {t} = useTranslation()
  return (
    <div className='messagepage'>
    <div className='messagecard'>
      <div className='imageM'>
  <img id='img' src={message ?  errorpage.imageFr : errorpage.imageAr} alt="" />
      </div>
      <div className='message'>{message ? errorpage.messageFr : errorpage.messageAr}</div>
<button id='btnM' onClick={()=>navigate('/')}>{t("homepage")}</button>
</div>
</div>
  )
}

export default Error