import React from "react";
import SplashPostIndexContainer from "./splash_post_index_container";
import { Link } from "react-router-dom";

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="splash-page-container">

        <div className="splash-greeting-container">
          <div className="splash-greeting-image">
            <img className="splash-img" src={window.splashURL} />
            <div className="splash-greeting-top">
              <div className="pet-care-link-container">
                <Link to="/dogs">
                  <div className="pet-care-link-text">DOG CARE</div>
                </Link>
                <Link to="/cats">
                  <div className="pet-care-link-text">CAT CARE</div>
                </Link>
              </div>
            </div>
            <div className="splash-greeting-bottom"></div>
          </div>
          <div className="splash-greeting-text-container">
            <div className="splash-greeting-text1">Find your new best friend</div>
            <div className="splash-greeting-text2">Browse pets from our network of over 11,500 shelters and rescues.</div>
          </div>
        </div>

        <div className="splash-body">
          <div className="splash-body-text">
            Pets Available for Adoption Nearby
          </div>
          <SplashPostIndexContainer />
        </div>

        <div className="splash-body-2">
          <div className="splash-body-text2">
            Planning to Adopt a Pet?
          </div>
          <div className="splash-body-text2-content">
            <div className="splash-body-text2-content-field">
              
              <div className="field-item">
                <div className="field-item-wrapper">
                  <div className="field-item-name">Checklist for New Adopter</div>
                  <div className="field-item-body">
                  Help make the transition, as smooth as possible.
                  </div>
                </div>
              </div>

              <div className="field-item">
                <div className="field-item-wrapper">
                  <div className="field-item-name">COVID-19 Resources</div>
                  <div className="field-item-body">
                    Get the latest on adoption processes, learn how local shelters and rescue groups are adopting and find out what you can do to help dogs and cats in need right now.
                  </div>
                </div>
              </div>

              <div className="field-item">
                <div className="field-item-wrapper">
                  <div className="field-item-name">Pet Adoption FAQs</div>
                  <div className="field-item-body">
                    Get answers to questions you haven't thought of.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;