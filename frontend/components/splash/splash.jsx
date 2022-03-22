import React from "react";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div>
          <h2>Find your new best friend</h2>
          <h4>Browse pets from our netowrk of over 11,500 shelters and rescues.</h4>
        </div>
        <div>
          <h2>Pets Available for Adoption Nearby</h2>
        </div>
        <div>
          <h3>Planning to Adopt a Pet?</h3>
          <li>Checklist for New Adopter
            <p>Help make the transition, as smooth as possible</p>
          </li>
          <li>COVID-19 Resources
            <p>Get the latest on adoption processes, learn how local shelters and rescue groups are adopting and find out what you can do to help dogs and cats in need right now.</p>
          </li>
          <li>Pet Adoption FAQs
            <p>Get answers to questions you haven't thought of.</p>
          </li>
        </div>
      </div>
    )
  }
}

export default Splash;