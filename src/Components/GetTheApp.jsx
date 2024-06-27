import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './GetTheApp.css'
import Vectorimg from '../assets/vector.png'
import lineimg from '../assets/line.png'
function GetTheApp(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color='white' className='btn' onClick={toggle}>
        Get the App
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
        <h2 id='top'>Download The <span id='span'>TruRide</span> Application Here</h2>
          <div className='container0'>
            <div className='div-android'>
              <p id='orange'>For Android</p>
              <p id='black'>android 8.0+</p>
              <p id='blue'>Download the TruRide Taxi app for the</p>
              <p id='blue'>latest Android devices! Enjoy easy</p>
              <p id='blue'>booking, real-time tracking, and secure,</p>
              <p id='blue'>affordable rides.</p>
              <br/>
              <img id='img' src={Vectorimg} alt='vectorimg'></img>
              <br/>
              <Button id='btn2' color="white" onClick={toggle}>
                Download App
              </Button>
            </div>
            <div>
              <img src={lineimg}></img>
            </div>
            <div className='div-apple'>
              <p id='orange'>For iOS</p>
              <p id='black'>iOS 15.6+</p>
              <p id='blue'>Get the TruRide Taxi app on your latest </p>
              <p id='blue'>iOS device! Experience seamless </p>
              <p id='blue'>booking, real-time tracking, and secure</p>
              <p id='blue'>affordable rides.</p>
              <br/>
              <img id='img' src={Vectorimg} alt='vectorimg'></img>
              <br/>
              <Button id='btn2' color="white" onClick={toggle}>
                Download App
              </Button>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '} */}
          {/* <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default GetTheApp;