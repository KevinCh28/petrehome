import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-container">
          <div>
            PET CARE TOPICS
          </div>
          <div className="footer-links-container">
            <a href="http://github.com/KevinCh28" target="_blank">
              <i className="icon fa-github"></i>
            </a>
            <a href="https://angel.co/u/kevin-chen-154" target="_blank">
              <i className="icon fa-angellist"></i>
            </a>
            <a href="https://www.linkedin.com/in/kevin-chen-b6843213a/" target="_blank">
              <i className="icon fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;