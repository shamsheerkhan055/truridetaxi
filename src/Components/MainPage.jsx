import React from 'react';
import Androidimg from '../assets/Android.png';
import Appleimg from '../assets/Apple.png';
import QRpng from '../assets/QR.png';
import rocketimg from '../assets/rocket.png';
import clockimg from '../assets/Clock.png';
import Appstoreimg from '../assets/AppStore.png';
import Playstoreimg from '../assets/PlayStore.png';
import handimage from '../assets/Hand.png';
import barimg from '../assets/bar.png';
import benfitsimg from '../assets/benifits.png'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './MainPage.css';
function Mainpage() {
  return (
    <>
      <div className='main-div'>
        <div className='rocket-container'>
          <img className='roc-img' src={rocketimg} alt='rocketimg' />
        </div>
        <div className='multicolor-text'>
          <h1>LAUNCHING SOON</h1>
        </div>
        <div className='clock-container'>
          <img className='clock-img' src={clockimg} alt='clockimg' />
        </div>
      </div>

      <div className="container2">
        <div className='Left'>
          <div className='LTop'>
            <p style={{ fontSize: '26px', fontWeight: 'bold', color: '#201f1f' }}>The most Affordable & Reliable <span style={{ color: '#FF2E00' }}>"TruRide"</span>Platform</p>
          </div>
          <div className='LMiddle'>
            <p style={{ fontSize: '40px', fontWeight: 'bold', color: '#100062', marginTop: '100px', margin: '0px' }}>Introducing<span style={{ color: '#FF2E00' }}> "TruRide" </span>- India's </p>
            <p style={{ fontSize: '40px', fontWeight: 'bold', color: '#100062', margin: '0px' }}>Premier AI-Infused Gamified Route </p>
            <p style={{ fontSize: '40px', fontWeight: 'bold', color: '#100062', margin: '0px' }}>Technology Platform!</p>
          </div>
          <div className='LBottom'>
            <p style={{ fontSize: '24px', color: '#100062', margin: '0px' }}>Welcome to <span style={{ color: '#FF2E00' }}>TruRidetaxi</span>, the innovative AI-driven service </p>
            <p style={{ fontSize: '24px', color: '#100062', margin: '0px' }}>simplifying cab, taxi, auto, and bike bookings. Dial our unique </p>
            <p style={{ fontSize: '24px', color: '#100062', margin: '0px' }}>#360 number from your mobile for a seamless, app-free ride</p>
            <p style={{ fontSize: '24px', color: '#100062', margin: '0px' }}>experience.</p>
          </div>
          <div className='Limg'>
            <img src={Appstoreimg} className='appstore' alt='appstore' />
            <img src={Playstoreimg} className='googleplay' alt='googleplay' style={{ marginLeft: '70px' }} />
          </div>
        </div>
        <div className='Right'>
          <img src={handimage} alt='handimage' />
        </div>
      </div>

      <div className='container1'>
        <div className='div-left'>
          <div className='div1'>
            <p style={{ color: 'white', margin: '0px', fontSize: '40px' }}>Download The <span style={{ color: '#ff2e00' }}>TruRide</span></p>
            <p style={{ color: 'white', fontSize: '40px' }}>Application Now</p>
          </div>
          <div className='div4'>
            <p style={{ color: 'white', margin: '0px' }}>Download TruRide: the AI-powered ride booking app with</p>
            <p style={{ color: 'white', margin: '0px' }}>gamified routes. Unlock rewards as a user, and drivers enjoy</p>
            <p style={{ color: 'white', margin: '0px' }}>bonuses with AI-enhanced mapping. Get the</p>
            <p style={{ color: 'white', margin: '0px' }}> best offers now!</p>
          </div>
        </div>
        <div className='div-right'>
          <div className='div2'>
            <div className='div-content'>
              <div>
                <p style={{ margin: '0px', fontSize: '40px', marginLeft: '34px' }}>For Android</p>
                <p style={{ margin: '0px', marginLeft: '34px' }}>iOS 15.6+</p>
                <button type="button" className="btn1">Get the App</button>
              </div>
              <div className='QR1'>
                <img src={QRpng} alt='QR Code'></img>
              </div>
              <img src={Androidimg} style={{ width: '120px', height: '120px', marginBottom: '160px', marginRight: '-20px' }} alt='Android'></img>
            </div>
          </div>
          <div className='div3'>
            <div className='div-content'>
              <div>
                <p style={{ margin: '0px', fontSize: '40px', marginLeft: '34px' }}>For iOS</p>
                <p style={{ margin: '0px', marginLeft: '34px' }}>iOS 15.6+</p>
                <button type="button" className="btn2">Get the App</button>
              </div>
              <div className='QR2'>
                <img src={QRpng} alt='QR Code'></img>
              </div>
              <img src={Appleimg} style={{ width: '100px', height: '100px', marginTop: '160px', marginRight: '-20px' }} alt='Apple'></img>
            </div>
          </div>
        </div>
      </div>

      <div className='container2'>
      <div className='top'> 
           <h2 id='head'> Benefits of <span>TruRide</span></h2>
           <img src={barimg} alt="bar"   style={{   width:"250px",height:'5px', marginTop:"-70px",alignItems:"center",marginRight:"30px", gap:"40px"}}  className='img-logo'/>
         
           </div>
      </div>

      <div className='container3'>
        <img style={{width:'100%', height:'500px'}} src={benfitsimg} alt='benfitsimage'/>
      </div>
    </>
  )
}

export default Mainpage;
