import React from 'react';
import Androidimg from '../assets/Android.png'
import Appleimg from '../assets/Apple.png'
import QRpng from '../assets/QR.png'
// import './Mainpage.css';
function Mainpage() {
  
  return (
    <>
    <div>
      <img className='home' src='public/Assets/home.png' alt='home.png'/>
      {/* <img src={homeimg} alt='home.png'/> */}
    </div>
    <div className='container1'>
      <div className='div-left'>
        <div className='div1'>
          <p style={{color: 'white', margin: '0px', fontSize: '40px'}}>Download The <span style={{color: '#ff2e00'}}>TruRide</span></p>
          <p style={{color: 'white', fontSize: '40px'}}>Application Now</p>
        </div>
        <div className='div4'>
          <p style={{color: 'white', margin: '0px'}}>Download TruRide: the AI-powered ride booking app with</p>
          <p style={{color: 'white', margin: '0px'}}>gamified routes. Unlock rewards as a user, and drivers enjoy</p>
          <p style={{color: 'white', margin: '0px'}}>bonuses with AI-enhanced mapping. Get the</p>
          <p style={{color: 'white', margin: '0px'}}> best offers now!</p>
        </div>
      </div>
      <div className='div-right'>
        <div className='div2'>
          <div className='div-content'>
            <div>
              <p style={{margin: '0px', fontSize: '40px', marginLeft: '34px'}}>For Android</p>
              <p style={{margin: '0px', marginLeft: '34px'}}>iOS 15.6+</p>
              <button type="button" className="btn1">Get the App</button>
            </div>
            <div className='QR1'>
              <img src={QRpng} alt='QR Code'></img>
            </div>
            <img src={Androidimg} style={{width: '120px', height: '120px', marginBottom: '160px', marginRight: '-20px'}} alt='Android'></img>
          </div>
        </div>
        <div className='div3'>
          <div className='div-content'>
            <div>
              <p style={{margin: '0px', fontSize: '40px', marginLeft: '34px'}}>For iOS</p>
              <p style={{margin: '0px', marginLeft: '34px'}}>iOS 15.6+</p>
              <button type="button" className="btn2">Get the App</button>
            </div>
            <div className='QR2'>
              <img src={QRpng} alt='QR Code'></img>
            </div>
            <img src={Appleimg} style={{width: '100px', height: '100px', marginTop: '160px', marginRight: '-20px'}} alt='Apple'></img>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Mainpage;
