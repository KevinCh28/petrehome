import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <ul>
              <li>
                <a href="http://github.com/KevinCh28" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="http://github.com/KevinCh28" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-angellist"></i>
                </a>
              </li>
              <li>
                <a href="http://github.com/KevinCh28" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;