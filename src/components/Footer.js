import React, { Component } from 'react';
const Footer = () =>{
  return (
    <div className="social">
      <h3 className="contact">Contact Me: </h3>
      <ul>
        <li className="icon"><a href="https://github.com/hossainamzad"><i className="fa fa-github" aria-hidden="true"></i></a></li>
        <li className="icon"><a href="mailto:johnny.hossain@gmail.com"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
        <li className="icon"><a href="https://www.linkedin.com/in/hossainmdamzad/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  )
}

export default Footer;
