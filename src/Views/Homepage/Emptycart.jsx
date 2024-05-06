import React from 'react'
import { useTranslation } from 'react-i18next'

function Emptycart() {
  const {t} = useTranslation()
  return (
    <div className='Emptycart'>
        <div className='empty'>
        <img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/empty-cart.webp`} alt="" />
        </div>
        <span>{t("shopping.emptycart")}</span>
        <button>{t("shopping.gotoshop")}</button>
    </div>
  )
}

export default Emptycart