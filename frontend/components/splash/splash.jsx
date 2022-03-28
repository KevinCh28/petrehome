import React from "react";
import { Link } from "react-router-dom";
import PostIndexContainer from "../posts/post_index_container"


class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="body">
        <div className="splash-greeting">
          <img className="splash-img" src={window.splashURL} />
          <h2 className="splash-greeting-text1">Find your new best friend</h2>
          <h4 className="splash-greeting-text2">Browse pets from our network of over 11,500 shelters and rescues.</h4>
        </div>

        <div className="splash-body">
          <h2 className="splash-body-text">Pets Available for Adoption Nearby</h2>
          <div className="recommendations-body">
            <div className="recommendations-body-inner">
              <div className="recommendations-grid"> 
                <div className="recommendations-grid-column">
                  <div className="recommendations-post-spot">
                    Random Pet Link
                  </div>
                </div>

                <div className="recommendations-grid-column">
                  <div className="recommendations-post-spot">
                    Random Pet Link
                  </div>
                </div>

                <div className="recommendations-grid-column">
                  <div className="recommendations-post-spot">
                    Random Pet Link
                  </div>
                </div>

                <div className="recommendations-grid-column">
                  <div className="recommendations-post-spot">
                    <Link to="/posts" className="recommendations-post-more">MORE PETS</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="splash-body">
          <h3 className="splash-body-text2">Planning to Adopt a Pet?</h3>
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