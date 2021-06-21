import React from "react";
import { FaChevronDown } from 'react-icons/fa';

export default Hero
const Hero = (props) => {
  return (
    <section  className={props.hide ? 'Hero hero-hide' : 'Hero'}>
        <ul>
          <span> 
            <h1 >Hello!<span className="highlight">My name is Naomi</span> and I am a Web Developer</h1>
            <h3> Scroll Down</h3>
            <FaChevronDown className="hero-scroll-icon"/>
          </span>

        </ul>
    </section>
  )
}