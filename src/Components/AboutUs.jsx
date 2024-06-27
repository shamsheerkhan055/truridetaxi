import React from 'react';
import './AboutUs.css'
import barimg from '../assets/bar.png'
import Larrow from '../assets/leftarrow.png'
import FRimg from '../assets/FRimg.png'
import TLimg from '../assets/TLimg.png'
import TRimg from '../assets/TRimg.png'
import FLimg from '../assets/FLimg.png'
import FiRimg from '../assets/FiRimg.png'
import SiLimg from '../assets/SiLimg.png'

export default function AboutUs() {
    return(
        <div className='container'>
           <div className='top'> 
           <h2 id='head'> About our <strong>TruRide</strong></h2>
           <img src={barimg} alt="bar"   style={{   width:"250px",height:'5px', marginTop:"-50px",alignItems:"center",marginRight:"30px", gap:"40px"}}  className='img-logo'/>
         
           </div>

           <div className='top-one'>
             <h3>Welcome to <span>TruRidetaxi</span></h3>
             <p>Welcome to 
                <strong> TruRidetaxi,</strong> the innovative AI-driven service simplifying cab, taxi, auto, and bike bookings. Dial <br></br>our unique #360 number from your mobile for a seamless, app-free ride experience.</p>
            </div>

            <h2 className='head-one'  style={{color: "#063558"}}> What Sets Us Apart</h2>

<div className='one'>
<div className='one-left'>

 <div  className='image-tag'>
 <img src={Larrow} alt="Larrow"    className='imgs'/>  
 <h5  style={{ color :"#100062"}}  className='header'>   Two way cab booking through, AI Call or whatsapp & App</h5>
 </div>


<div className="para">
<p    style={{color:"#063558"}}  
    >TruRide offers seamless two-way cab booking via call, WhatsApp, and our intuitive app <br>
    </br>for easy, flexible ride bookings. Enjoy accessibility and convenience by choosing <br>
    </br>your preferred method to book a ride anytime, anywhere.</p>
</div>
</div>
<div className='one-right'>
<img src={FRimg} alt="FRimg"  className='images-one' />
</div>
</div>




<div className='two'>

    <div className="two">
        <div className="two-left">
            <img src={TLimg} alt=""  className='images-two' /> 
        </div>
        <div className="two-right">

            <h5    style={{ color :"#100062"}}    className='header' > <img src={Larrow} alt="Arrow"    className='imgs'/>AI Gamified rewards</h5>

            <div className="para">
            <p   style={{color:"#063558"}}  >TruRide's AI gamified rewards system boosts user satisfaction by <br></br>offering incentives for frequent rides through a point-based system <br></br>with unlockable rewards and bonuses.</p>
            </div>
            
        </div>
    </div>
</div>


<div className="three">
    <div className="three-left">

        <div className="image-tag"> <img src={Larrow} alt="Arrow"    className='imgs'/>
        <h5  style={{ color :"#100062"}}   className='header'> We offer 0% commission on cabs and auto- walas, giving drivers a stake in our company.</h5>
        </div> 
        <div className="para">

        <p   style={{color:"#063558"}}  >TruRide offers 0% commission for cabs and auto-walas,<br></br> allowing drivers  to keep more earnings and have a stake in the company, <br></br>enhancing satisfaction and loyalty.</p>
        </div>
       
       
    </div>
    <div className="three-right">
        <img  src={TRimg} alt=""  className='images-three' /> 
    </div>
</div>


   <div className="four">
    <div className="four-left">
        <img src={FLimg} alt=""  className='images-four' />  
    </div>
    <div className="four-right">
<div   className="image-tag" >
<img src={Larrow} alt="Arrow"    className='imgs'/>
<h5     style={{ color :"#100062"}}  className='header'> Increased Commissions for TruRide Drivers through Ad’s Partnership</h5>

</div>
<div className="para">
<p   style={{color:"#063558"}}   >TruRide has partnered with advertisers to offer higher commission <br></br>rewards, boosting driver income and satisfaction. This collaboration <br></br>integrates ads into our platform, providing increased financial incentives <br>
</br>for our drivers.</p>
</div>
</div>
    
   </div>


  <div className="five">
    <div className="five-left">

        <div className="image-tag">
        <img src={Larrow} alt="Arrow"   className='imgs' />
        <h5     style={{ color :"#100062"}} className='header'>   User-friendly interface ensures seamless and
        <br></br>effortless navigation.</h5>
        </div>
       
       <div className="para"> 
       <p    style={{color:"#063558"}} >TruRide's user-friendly interface enables quick ride booking, journey <br></br> tracking, and easy access to information, ensuring a seamless<br></br> experience for all users.</p>
       </div>
    </div>
    <div className="five-right">
        <img src={FiRimg} alt="FiRimg"   className='images-five'/>  
    </div>
  </div>

<div className="six">
    <div className="six-left">
        <img src={SiLimg} alt="SiLimg"    className='images-six'/> //"assets\Group 481996.png"
    </div>
    <div className="six-right">
        <div  className="image-tag">

        <img src={Larrow} alt="Arrow"    className='imgs'/>
        <h5   style={{ color :"#100062"}}  className='header'> Partnered with insurance to provide coverage for our drivers.</h5>
        </div>
    
        <div className="para">
            <p   style={{color:"#063558"}}      className='para'>TruRide partners with insurance providers to offer comprehensive <br></br> coverage, enhancing driver security and satisfaction with increased <br></br>protection and financial support.</p>
    </div>
    </div>
</div>
 
 </div>


   
          
        
    )
}