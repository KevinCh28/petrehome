import React from "react";
import { Link } from "react-router-dom";

class SplashPostIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { post } = this.props

    return (
      <div className="recommendations-post-index-item">
        <Link
          to={`/posts/${post.id}`}
          className="index-show-link">
          <div>
            <img src={post.photoUrls[0]} className="post-index-item-img" />
          </div>
          <div className="post-item">
            <h2 className="index-item-name">{post.petName}</h2>
            <div className="post-age-gender-container">
              <h3 className="index-item-age">{post.petAge === 1 ? "Baby" : post.petAge < 3 ? "Young" : "Adult"}</h3>
              <h3 className="index-item-spacing"> • </h3>
              <h3 className="index-item-gender">{post.petGender}</h3>
            </div>
            <h3 className="index-item-breed">{post.petBreed}</h3>
          </div>
        </Link>
      </div>
    )
  }
}

export default SplashPostIndexItem;