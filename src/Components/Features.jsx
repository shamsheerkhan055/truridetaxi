
import React from "react";
import "./Features.css";
import barimg from '../assets/bar.png'
import lineimg from '../assets/line.png'

export default function Features(){
    return (
        <div>
            <section>
            <div className="container">
            <div  className="header"> 
            <h3> Key <span>Features</span></h3>
            <div><img src={barimg} alt="bar"  className="img-logo"   style={{ width:"200px",height:'5px', alignItems:"center",marginLeft:"490px",marginTop:'-20px'}} /></div>
            </div>

            <div className="left-box-one"></div>
             <div className="right-box-one"></div>
              <div className="left-box-three"></div>
              <div className="right-box-two"> </div>
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
            <img className='line1' src={lineimg} alt='line' />
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
