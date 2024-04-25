import React from 'react'

function Login() {
  return (
    <div className='Login'>
        <div className='loginform'>
            <div className='conatinerform'> 
          <div className='largeLogo'>
            <img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/logooff.png`} alt="" />
          </div>
          <h4 id='below'>Sign In Below</h4>
          <div className='inputs'>
            <div className='row'>
                <div className='head'>
                 <span id='title'>Email/Username</span>  <span id='imp'>*</span>
                </div>
                <input placeholder='Enter your username or email address' type="text" />
            </div>
            <div className='row'>
                <div className='forgetpass'>
                <div className='head'>
                 <span id='title'>Email/Username</span>  <span id='imp'>*</span>
                 </div>
                 <span id='forgett'>Lost your password?</span>
                </div>
                <input placeholder='Enter your username or email address' type="text" />

            </div>
            <div className='check'>
               <input type="checkbox" /> 
               <span>Remember me ?</span>
            </div>
            <button id='sign'><i class='bx bx-log-in-circle'></i> Sign in</button>
          </div>
          </div>
        </div>
        <div className='background'>
          <div className='backimage'>
            <img id='img' src="https://images.pexels.com/photos/19257851/pexels-photo-19257851/free-photo-of-clairiere-terrain-arbres-campagne.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <div className='copy'>
            <div className='cop'>
          <h2>Uniklay Brand</h2>
          <span>Copyright 2024 © Uniklay Brand.</span>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Login