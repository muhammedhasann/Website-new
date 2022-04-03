import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/d.png';
import './navbar.css';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">FaGithub</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#possibility">Skills</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Contact</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
                <a href="https://www.linkedin.com/in/muhammedhaan/ "><i class="fab fa-linkedin "></i></a>
                <a href="https://twitter.com/Muhammed__Hasan "><i class="fab fa-twitter "></i></a>
                <a href="https://github.com/muhammedhasann "><i class="AiOutlineGithub "></i></a>
                <a href="https://www.facebook.com/profile.php?id=100066712050347 "><i class="fab fa-facebook-f "></i></a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">About</a></p>
            <p><a href="#possibility">Skills</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Contact</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;