import React from 'react'
import { useTranslation } from 'react-i18next'

function Topheader() {
  const {t} = useTranslation()
  return (
    <div className='Topheader'>
        <div className='p'>{t("specialoffer.sp")}</div>
    </div>
  )
}

export default Topheader