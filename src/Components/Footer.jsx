import React from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {
    const {t} = useTranslation()
  return (
    <div className='Footer'>
        {/* <div className='footerimage'> 
        <img src={`${import.meta.env.VITE_BASE_URL}/Images/C837cs.jpg`} alt="" />
        </div> */}
        <div className='top'>
        <div className='introSite'>
            <div className='Logoblack'>
                <img  src={`${import.meta.env.VITE_BASE_URL}/Images/logo-noiir-.png`} alt="" />
            </div>
            <div className='desc'>
            {t("footer.desc")}
            </div>
            <div className='allmedia'>
                 <div className='media'><i class='bx bxl-facebook'></i></div>
                 <div className='media'><i class='bx bxl-whatsapp'></i></div>
                 <div className='media'><i class='bx bxl-tiktok' ></i></div>
                 <div className='media'><i class='bx bxl-youtube' ></i></div>
            </div>
        </div>
        <ul id='ul'>
            <li id='p'><h2>{t("footer.Guides")}</h2></li>
             <li id='li'>{t("footer.Exchange")}</li> 
             <li id='li'>{t("footer.Privacypolicy")}</li>
             <li id='li'>{t("footer.UserTerms")}</li>
             <li id='li'>{t("footer.Guides")}</li>
             <li id='li'>{t("footer.Contactus")}</li>

        </ul>
        
</div>
<div className='copyright'>
    <span>{t("copyrightinfo.copyright")}</span>
    <ul>
       <li><i class='bx bx-credit-card'></i>{t("copyrightinfo.cash")}</li> 
       <li><i class='bx bx-money-withdraw' ></i> {t("copyrightinfo.dh")}</li> 
       <li>
       {localStorage.getItem('lan') ? 
            <div className='logol logoll'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/france.png`} alt="" /></div>
            : 
            <div className='logol logoll'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/morocco.png`} alt="" /></div>

            }
        {t("copyrightinfo.language")}</li> 
    </ul>
</div>
    </div>
  )
}

export default Footer