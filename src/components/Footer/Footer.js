import React  from 'react';
import './Footer.css';
import LogoImg from '../../pic/logolow.png';




const Footer = () =>{

    return (

<div className= "row" id="inwza">
  <div className= "container">
      <div className = "col-md-4">

        <div id="img">
        <img src={LogoImg} width="275px" height="114px"/>
        </div>

        <div id="des">
        <p> Joeyable Express </p>
        <p> Super Ultra Pretty Fastest Logistic </p>
        </div>

        <div className="input-group" id="footer-email-bar">
        <input type="text" className="form-control" placeholder="ENTER E-MAIL TO SUBSCRIBE"/>
        <span className="input-group-btn" >
        <button className="btn btn-default" id="okbutton" type="button">Go!</button>
        </span>
        </div>


      </div>

      <div className = "col-md-4">
        <div id="sitemap">
          <h4> SITEMAP </h4>
          <p>    HOME </p>
          <p>    SERVICE </p>
          <p>    PROMOTION </p>
          <p>    LOGISTIC </p>
          <p>    FEEDBACK </p>
        </div>

      </div>

      <div className = "col-md-4">
        <div id="contact-us">
          <h4> Contact Us </h4>
          <p>    21/333 Gable Road </p>
          <p>    Bangkok 10310 Thailand </p>
          <p>    Tel. 02-4329999 </p>
          <p>    Email : JOEYINWZA@G-ABLE.COM </p>
        </div>

      </div>
  </div>




</div>
    );
  };



export default Footer;
