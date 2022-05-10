import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="pet-care-link-container">
          <Link to="/dogs">
            <div className="pet-care-link-text">DOG CARE</div>
          </Link>
          <Link to="/cats">
            <div className="pet-care-link-text">CAT CARE</div>
          </Link>
        </div>
        
        <div className="footer-links-container">
          <a href="http://github.com/KevinCh28" target="_blank" className="footer-link">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://angel.co/u/kevin-chen-154" target="_blank" className="footer-link">
            <i className="fa-brands fa-angellist"></i>
          </a>
          <a href="https://www.linkedin.com/in/kevin-chen-b6843213a/" target="_blank" className="footer-link">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Footer;