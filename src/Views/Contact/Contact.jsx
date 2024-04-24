import React from 'react'

function Contact() {
  return (
    <div className='Contact'>
        <h1>Contact</h1>
        <div className='contact-items'>
          <div className='form'>
            <h2>Sent A Message</h2>
            <div className='horizontal'>
            <div className='fr'>
              <div className='title'><span id='subtitle'>Name</span><span id='imp'>*</span></div>
              <input type="text" placeholder='Name'/>
            </div>
            <div className='fr'>
              <div className='title'><span id='subtitle'>Email</span><span id='imp'>*</span></div>
              <input type="text" placeholder='Email'/>
            </div>
            <div className='fr'>
              <div className='title'><span id='subtitle'>Address</span><span id='imp'>*</span></div>
              <input type="text" placeholder='Address'/>
            </div>
            <div className='fr'>
              <div className='title'><span id='subtitle'>Phone</span><span id='imp'>*</span></div>
              <input type="text" placeholder='Phone'/>
            </div>
            </div>
            <div className='fr'>
              <div className='title'><span id='subtitle'>Subject</span><span id='imp'>*</span></div>
              <input type="text" placeholder='Subject'/>
            </div>
            <div className='fr'>
              <div className='title'><span id='subtitle'>Content</span><span id='imp'>*</span></div>
              <textarea type="text" placeholder='Content'/>
            </div>
            <button id='submitbtn'>Send</button>
          </div>
          <div className='info'>
            <div className='in'>
              <img id='img' src="https://www.centredappels.ca/content/uploads/2017/08/Pourquoi-travailler-dans-un-centre-dappel.jpg" alt="" />
            </div>
            <div className='in'>
            <i class='bx bx-envelope' ></i>
              <span>hamzarougani@gmail.com</span>
            </div>
            <div className='in'>
            <i class='bx bx-phone'></i>
              <span>+212767287673</span>
            </div>
            <div className='in'>
            <i class='bx bx-location-plus'></i>
              <span>Tikiouine hay zaitoune agadir moroccaine</span>
            </div>
            <div className='in media'>
            <i class='bx bxl-facebook' ></i>
            <i class='bx bxl-whatsapp' ></i>
            <i class='bx bxl-twitter' ></i>
            <i class='bx bxl-linkedin' ></i>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Contact