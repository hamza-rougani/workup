import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { mobilesilder,webimages } from '../../Admin/Welcome/welcomeImages';
function Introduct() {
  const { t, i18n } = useTranslation();
  return (
    <div className='Introduct'>
           <div className='infoI'>
            <div className='headI'>
              <span className='sub'>{t("welcome.subtitle")}</span>
               <h1>{t('welcome.title')}</h1>
            </div>
            <p >{t("welcome.desc")}</p>
             <a href='#shopsection' id='linkl'> <button id='shop'>{t("welcome.shopnow")}</button></a>

           </div>
           <div className='Image'>
           {/* <img src='https://shofy-grocery.botble.com/storage/grocery/sliders/slider-1.png' alt="" /> */}
           <div className='img img1'><img id='img' src={webimages[0]} alt="a" /></div>
           <div className='img img2'><img id='img' src={webimages[1]} alt="b" /></div>
           <div className='img img3'><img id='img' src={webimages[2]} alt="c" /></div>
           </div>
        </div>
  )
}

export default Introduct