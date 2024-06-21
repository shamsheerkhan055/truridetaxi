import React from 'react';
import './ContactUs.css';
import locationimg from '../assets/location.png'
import mailimg from '../assets/mail.png'
import dailimg from '../assets/dail.png'
import globeimg from '../assets/globe.png'
import grouplogo from '../assets/Grouplogo.png'

function ContactUs() {
  return (
    <div className='container-contact'>
      <div className='bgImg'>
        <div className='content'>
          <div className='content-txt'>
            <div className='txt-h1'><p>Get in Touch</p></div>
            <div className='txt-h3'>
              <p style={{ color: 'white' }}>Connect with us via social media or</p>
              <p style={{ color: 'white', marginBottom: '147px' }}>drop us a line to get in touch.</p>
            </div>
            <div className='msg'>
              <div className='sendMsg'>
                <p style={{ color: '#100062', marginTop: '43px', fontSize: '30px', textAlign: 'left', marginLeft: '72px' }}>Send a message</p>
                <div className='details'>
                  <div className="form-container-left">
                    <form>
                      <div className="input-container-left">
                        <input type="text" id="name" placeholder='Enter your First Name' className="form-input" />
                      </div>
                      <div className="input-container-left" style={{ marginTop: '40px' }}>
                        <input type="text" id="name" className="form-input" placeholder='Enter your Email' />
                      </div>
                    </form>
                  </div>
                  <div className="form-container-right">
                    <form>
                      <div className="input-container-right">
                        <input type="text" id="name" placeholder='Enter your Last name' className="form-input-right" />
                      </div>
                      <div className="input-container-right" style={{ marginTop: '40px' }}>
                        <input type="text" id="name" placeholder='Enter your Phone Number' className="form-input" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="form-container-below">
                  <form>
                    <div className="input-container-below">
                      <input type="text" id="name" placeholder='Individual or Company' className="form-input-left" />
                    </div>
                    <div className="input-container-below">
                      <input type="textarea" id="name" rows="4" cols="50" wrap="soft" placeholder='Comment' className="form-input-left" />
                    </div>
                  </form>
                </div>
                <button type="submit" className="submit-button">Send</button>
              </div>
              <div className='contact'>
                <p style={{ marginTop: '43px', fontSize: '30px', textAlign: 'left', marginLeft: '69px' }}>Contact Info</p>
                <div className='location'>
                  <div className='location-text'>
                    <img className='logimg' src={locationimg} alt='location' />
                    <p style={{ fontSize: '20px', width: '325px' }}>H.no-3-11-368/Flat no; 401, 4th Floor, above old Indusind Finance Bank, Back side of Axis Bank, L.B Nagar, Hyderabad, Telangana 500068</p>
                  </div>
                  <div className='location-text'>
                    <img className='logimg' src={mailimg} alt='mail' />
                    <p>truridetaxi@gmail.com</p>
                  </div>
                  <div className='location-text'>
                    <img className='logimg' src={dailimg} alt='phone' />
                    <p>(+91) 9876543210</p>
                  </div>
                  <div className='location-text'>
                    <img className='logimg' src={globeimg} alt='website' />
                    <p>www.truridertaxi.com</p>
                  </div>
                  <div>
                    <img className='grouplogo' src={grouplogo} alt='grouplogo'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
