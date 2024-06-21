import React from 'react';
import './Footer.css';
import Appstoreimg from '../assets/AppStore.png'
import Playstoreimg from '../assets/PlayStore.png'
import Footerlogoimg from '../assets/footerlogo.png'
import Ficonsimg from '../assets/Ficons.png'


export default function Footer() {
  return (
    <div>
      <section className='footer'>
        <div className='white'></div>
        <div className='orange'>
          <div className='footer-content'>
            <p className='unlock'>Unlock your Dream affordable Ride with our TruRide</p>
            <p className='download'>Download the App Now!</p>
            <p className='tru'>TruRide: AI-powered ride booking with gamified routes.</p>
            <p className='tru'>Users earn rewards; drivers get bonuses</p>
            <p className='tru' style={{ marginTop: '0px' }}>via AI-enhanced mapping.</p>
          </div>
          <div className='footer-img'>
            <img src={Appstoreimg} className='appstore' alt='appstore' />
            <img src={Playstoreimg} className='googleplay' alt='googleplay' style={{ marginLeft: '20px' }} />
          </div>
        </div>

        <div className='black'>
          <div className='div-Fleft'>
            <div>
              <img className='Flogo' src={Footerlogoimg} alt='Footer Logo' />
            </div>
            <div className='Dtext'>
              <p>TruRide offers an innovative AI-powered platform for booking</p>
              <p>rides, featuring gamified routes. Users are incentivized with </p>
              <p>rewards for booking rides, while drivers can earn bonuses</p>
              <p>through the AI-enhanced gamified route mapping system.</p>
              <img id='icon' src={Ficonsimg} alt='Ficons'></img>
            </div>
          </div>
          <div className='Dmiddle'>
            <h3 style={{ color: 'white' }}>Company</h3>
            <ul>
              <a href='/'><li >Home</li></a>
              <li href='/features'>Features</li>
              <li>About us</li>
              <li>How it works</li>
              <li>Testimonials</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='Dright'>
            <h3 style={{ color: 'white' }}>Contact</h3>
            <ul>
              <li>(+91) 9346467553</li>
              <li>www.truridetaxi.com</li>
              <li>truridetaxi@gmail.com</li>
              <p style={{ margin: '0' }}>H.no-3-11-368/Flat no; 401,</p>
              <p style={{ margin: '0' }}>4th Floor, above old Indusind</p>
              <p style={{ margin: '0' }}>Finance Bank, Back side of </p>
              <p style={{ margin: '0' }}>Axis Bank, L.B Nagar,</p>
              <p style={{ margin: '0' }}>Hyderabad, Telangana </p>
              <p>500068</p>
            </ul>
          </div>
          <div className='DRright'>
              <h3 style={{color:'white'}} >Get the latest information</h3>
              <div class="input-group mb-3">
                <input id='input' type="text" class="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">▶</button>
              </div>   
          </div>
        </div>
      </section>
    </div>
  );
}
