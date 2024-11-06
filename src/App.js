import logo from './logo.svg';
import './App.css';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './Carousel';
import Slider from 'react-slick';


const App = () => {
  return (
    <div>
      <div class="up">
        <div class="navbar-ribbon-container">
          <div class='ribbon-container'>
          <span class='ribbon-img-text'><MdEmail style={{fontSize:24}}/>Hello@gmail.com</span>
          <span class='ribbon-img-text'><FaPhoneAlt style={{fontSize:24}}/>1234567890</span>
          </div>

          <div class='ribbon-container'>
          <span class='ribbon-img-text'>Follow Us</span>
          <div class='ribbon-container'>
          <span class='ribbon-img-text'><FaFacebook style={{fontSize:24}}/></span>
          <span class='ribbon-img-text'><ImTwitter style={{fontSize:24}}/></span>
          <span class='ribbon-img-text'><FaYoutube style={{fontSize:24}}/></span>
          </div>
          </div>
        </div>
      </div>

      <div class="nav">
        <a href="some">FAQ</a>
        <a href="ome">Contact</a>
        <a href="ome">Blog</a>
        <a href="me">Service</a>
        <a href="e">About</a>
        <a href="ee">Home</a>
        <div>
        <a class="brand" href="brand">Simple Like This</a>
        </div>
      </div>

      <div class='main-container'>
      <br />
        
        
        <div class='form-container'>
          <form class='form-data-container'>
          <h1>Login Page</h1>
          <input type='text' class='input' placeholder='Enter Your UserName' />
          <input type='password' class='input' placeholder='Enter Your Password' />
          <button type='submit' class='login-btn'>Login</button>
          <br />
          </form>
        </div>
      </div>
      <br/>
      <div>
      <Carousel />
      </div>
      <br/>
      <footer class="footer">
        <div class='row'>
        <div class="foot-container">
          <div class="footer-links">
          <h4>Quick Links</h4>
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Service</a>
          <a href="">Contact</a>
          <a href="">FAQ</a>
          </div>

          <div class="footer-links">
          <h4>Contact Us</h4>
          <a href="">+916483291739</a>
          <a href="">Info@odonil.com</a>
          <a href="">Madhapur area,<br/> Hyderabad</a>
          </div>

          <div class="footer-links">
          <h4>Follow Us</h4>
          <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">YouTube</a>
          </div>
        </div>
        </div>

      </footer>
    </div>
  );
};

export default App;

