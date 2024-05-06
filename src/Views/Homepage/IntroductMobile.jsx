import React from 'react'
import { useTranslation } from 'react-i18next'

function IntroductMobile({image}) {
  const {t} = useTranslation()
  return (
    <div className='IntroductMobile'>
        <div className='slideiamge'><img id='img' src={image} alt="" /></div>
        <div className='shopce'>
        <a href='#shopsection' id='linkl'><button className='shopnow'>{t("welcome.shopnow")}</button></a>
        </div>
    </div>
  )
}

export default IntroductMobile