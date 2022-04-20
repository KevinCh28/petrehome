import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-links">
            <a href="http://github.com/KevinCh28" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-brands fa-github fa-3x"></i>
            </a>
            <a href="https://angel.co/u/kevin-chen-154" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-brands fa-angellist fa-3x"></i>
            </a>
            <a href="https://www.linkedin.com/in/kevin-chen-b6843213a/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-brands fa-linkedin fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;