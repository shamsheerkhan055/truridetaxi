



import React from 'react';
import "./Testimonials.css";
import line2img from '../assets/line2.png'
import Autoimg from '../assets/Autoimg.png'
import LQuotimg from '../assets/LQuot.png'
import RQuotimg from '../assets/RQuot.png'
import barimg from '../assets/bar.png'
import linepng from '../assets/line.png'

export default function Testimonials(){
    return(
        <div className='div'>
            <section  className='testominals-body'>  
            <div className="testimonials-heading">
                <h3> Our Drivers & Riders  <strong> Testimonials </strong>    </h3>
                <div>

                
                <img src={line2img} alt="line2img"  className="img-logo"   style={{rotate:"90deg", width:"30px",marginTop:"100px",alignItems:"center", marginLeft:"-350px" }} />
                </div>
                {/* <img src="assets\line2.png" alt=""    className='img-logo'   style={{rotate:"90deg", marginTop:"-30px", marginRight:"100px"}} /> */}
            </div>
              
              <div  className='image-body'>
                 <div> <img src={Autoimg} alt="Autoimg" /></div>
                 </div>
                <div  className='para-body'>
                    
                    <img src={LQuotimg} alt="LQuotsimg"   className='colon-img'  style={{marginBottom:"100px", marginRight:"10px"}} />
                    <p>Excited to join TruRide as a driver! Fair earnings, community<br></br>support, and perks like insurance and ad-based extra income<br></br> make it a game-changer. Can't wait for the launch! 🚗💼</p>
                    <img src={RQuotimg} alt="RQuotimg"   className='colon-img'  style={{marginTop:"100px", marginLeft:"10px"}}  />
                </div>
            </section>

            <section className="contact-section"> 
        <div className="heading2">
          <h3 style={{color:'#100062'}}>Contact Us</h3>
        </div>
        <div>
          <img style={{width:'200px',height:'5px',marginLeft:'660px'}} src={barimg} alt='bar' />
        </div>
        <div className="body-content">
          <div className="left-side-content">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label"> Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Mobile Number</label>
              <input type="number" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label"> You are a ?</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Comments</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="bttn">Submit</button>
          </div>
          <div className='middle1'> 
            <img className='line1' src={linepng} alt='line' />
          </div>
          <div className="right-content">
            <div>
              <p style={{color:'#FF2E00',fontSize:'30px'}}><span>Head Office:</span></p>
              <p style={{color:'#100062',fontSize:'25px'}}>H.no-3-11-368/Flat no; 401, 4th<br />Floor, above old Indusind <br />Finance Bank, Back side of Axis<br />Bank, L.B Nagar, Hyderabad,<br />Telangana 500068</p>
            </div>
            <div>
              <p style={{color:'#FF2E00',fontSize:'30px'}}><span>Contact us:</span></p>
              <p style={{color:'#100062',fontSize:'25px'}}>
                Email- truridetaxi@gmail.com<br />
                Helpline No. +91 9346467553<br />
                -truridetaxi.com
              </p>
            </div>
          </div>
        </div>      
      </section>
        </div>
    )
}