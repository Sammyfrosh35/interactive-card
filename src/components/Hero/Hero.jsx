import React from 'react'
import "./Hero.css";
import cardFront from "/bg-card-front.png";
import cardBack from "/bg-card-back.png";
import logo from "/card-logo.svg";

const Hero = () => {

const default_name = "JANE APPLESEED"


  return (
    <main>
        <div className="left-hero">
            
           <div className="card-front">
           <img src={cardFront} />
          <div className="texts"><span>0000 0000 0000 0000</span>
          <img src={logo} alt="logo" /></div>
          
           <div className="lower-text">
          <p className="name">{default_name}</p>
          <span className="expiry">00 / 00</span>
          </div>

 </div>
           <div className="card-back">
            <img src={cardBack} alt="back"/>
            <div className="cvv"><span> 000</span></div>

           </div>
        </div>









        <div className="right-hero">
            <div className="form">
                <label htmlFor="name">CARDHOLERNAME: </label> <br />
                <input type="text" />
            </div>
        </div>
        
    </main>
  )
} 

export default Hero