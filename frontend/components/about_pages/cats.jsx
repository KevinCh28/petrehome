import React from "react";
import { Link } from "react-router-dom";

class Cats extends React.Component {
  render() {
    return (
      <div className="about-page-container">
        <div className="article-header-container">
          <Link to="/">Home</Link>
        </div>
        <div className="article-body-container">
          <div className="article-title">
            Cats
          </div>
          <div className="article-category">
            <div className="article-category-title">CAT HEALTH</div>
            <Link to="/cats/cats-age" className="article-links">
              Age-Related Healther Problems by Breed
            </Link>
            <Link to="/cats/cats-spay-neuter" className="article-links">
              {`Spaying & Neutering - Benefits of Fixing Your Dog or Cat`}
            </Link>
          </div>

        </div>
      </div>
    )
  }
}

export default Cats