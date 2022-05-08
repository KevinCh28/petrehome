import React from "react";
import { Link } from "react-router-dom";

class Dogs extends React.Component {
  render() {
    return (
      <div className="about-page-container">
        <div className="article-header-container">
          <Link to="/">Home</Link>
        </div>
        <div className="article-body-container">
          <div className="article-title">
            Dogs
          </div>
          <div className="article-category">
            <div className="article-category-title">DOG HEALTH</div>
            <Link to="/dogs/dogs-nutrition" className="article-links">
              Understanding Pet Food Ingredients
            </Link>
            <Link to="/dogs/dogs-age" className="article-links">
              Age-Related Healther Problems by Breed
            </Link>
            <Link to="/dogs/dogs-spay-neuter" className="article-links">
              {`Spaying & Neutering - Benefits of Fixing Your Dog or Cat`}
            </Link>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Dogs