import React from 'react'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next';
function SwitchLangauge() {

  function AddFr(){
      document.body.style.direction='ltr'
      document.body.classList.add('FrenchActive')
      localStorage.setItem('lan', 'fr')
  }
  function RemoveFrench(){
    document.body.style.direction='rtl'
    document.body.classList.remove('FrenchActive')
    localStorage.removeItem('lan')
    }
  const {t} = useTranslation()
  return (
    <div className='SwitchLangauge'>
        <ul>
            <li onClick={()=>{
                changeLanguage('ar')
                RemoveFrench()
                }}
            id='lil'><div className='logol'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/morocco.png`} alt="" /></div>{t("languages.ar")}</li>
            <li onClick={()=>{
                changeLanguage('fr')
                AddFr()
                }}
            ><div className='logol'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/france.png`} alt="" /></div>{t("languages.fr")}</li>
        </ul>
    </div>
  )
}

export default SwitchLangauge