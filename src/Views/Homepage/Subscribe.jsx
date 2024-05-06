import React from 'react'
import { useTranslation } from 'react-i18next'

function Subscribe() {
  const {t} = useTranslation()
  return (
    <div className='Subscribe move'>
        <div className='itemS'>
        <div className='title'> 
        <div id='sale'>{t("sub.off")}</div>
       <div id='sub'>{t("sub.subsc")}</div>
        </div>
        <div className='subs'>
            <input placeholder={t("sub.phone")} type="text" />
            <button>{t("sub.do")}</button>
        </div>
        </div>
    </div>
  )
}

export default Subscribe