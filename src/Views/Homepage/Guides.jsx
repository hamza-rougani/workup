import React from 'react'
import { useTranslation } from 'react-i18next'

function Guides() {
  const {t} = useTranslation()
  return (
    <div className='Guides move'>
        <ul>
            <li id='li'><i class='bx bxs-car-wash'></i>{t("guides.FlexibleDelivery")}</li>
            <li id='li'><i class='bx bx-money-withdraw' ></i>{t("guides.backmoney")}</li>
            <li id='li'><i class='bx bx-wallet-alt'></i> {t("guides.SecurePayment")}</li>
            <li ><i class='bx bx-headphone'></i>{t("guides.HourSupport")}</li>
        </ul>
    </div>
  )
}

export default Guides