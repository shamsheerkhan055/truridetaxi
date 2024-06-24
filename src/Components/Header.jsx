import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import GetTheApp from './GetTheApp';
import newlogo from '../assets/newlogo.png';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={newlogo} alt="newlogo" className="logo-img" />
          </a>
          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/howitworks">How it works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactus">Contact us</a>
              </li>
            </ul>
            <GetTheApp />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;