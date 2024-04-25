import React from 'react'

function Footer() {
    const collections = ['Carrot','Banana','Strawberry','Mango','Ice Cream','Fruits']
  return (
    <div className='Footer move'>
        <div className='top'>
        <div className='introSite'>
            <div className='largeLogo'>
                <img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/logooff.png`} alt="" />
            </div>
            <div className='desc'>
            Shofy is a powerful tool eCommerce Laravel script for creating a professional and visually appealing online store.
            </div>
            <div className='allmedia'>
                 <div className='media'><i class='bx bxl-facebook'></i></div>
                 <div className='media'><i class='bx bxl-whatsapp'></i></div>
                 <div className='media'><i class='bx bxl-tiktok' ></i></div>
                 <div className='media'><i class='bx bxl-youtube' ></i></div>
            </div>
        </div>
        <ul id='ul'>
            <li id='p'><h2>My Account</h2></li>
             <li id='li'>Track Orders</li> 
             <li id='li'>Shipping</li>
             <li id='li'>Wishlist</li>
             <li id='li'>Order History</li>
             <li id='li'>Returns</li>

        </ul>
        <ul id='ul'>
            <li id='p'><h2>Information</h2></li>
             <li id='li'>Track Orders</li> 
             <li id='li'>Shipping</li>
             <li id='li'>Wishlist</li>
             <li id='li'>Order History</li>
             <li id='li'>Returns</li>

        </ul>
        <ul id='ul'>
            <li id='p'><h2>Talk To Us</h2></li>
             <li id='li'>Track Orders</li> 
             <li id='li'>Shipping</li>
             <li id='li'>Wishlist</li>
             <li id='li'>Order History</li>
             <li id='li'>Returns</li>

        </ul>
</div>
<div className='categoriescollections'>
    <div className='collection'>
        <span>Fruits :</span>
        <ul>
            {collections.map((c,index)=><li key={index}>{c}</li>)}
        </ul>
    </div>
    <div className='collection'>
        <span>Sweet Treats : </span>
        <ul>
            {collections.map((c,index)=><li key={index}>{c}</li>)}
        </ul>
    </div>
    <div className='collection'>
        <span>Fashion : </span>
        <ul>
            {collections.map((c,index)=><li key={index}>{c}</li>)}
        </ul>
    </div>
</div>
<div className='copyright'>
    <span>© 2024 All Rights Reserved.</span>
    <ul>
       <li><i class='bx bx-credit-card'></i> Cash on delivery</li> 
       <li><i class='bx bx-money-withdraw' ></i> MAD</li> 
       <li><i class='bx bx-globe'></i> FR (Francais)</li> 
    </ul>
</div>
    </div>
  )
}

export default Footer