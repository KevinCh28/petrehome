import React from "react";
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { post } = this.props

    return (
      <li className="post-index-item">
        <Link
          to={`/posts/${this.props.post.id}`}
          className="index-show-link">
          <div>
            <img src={post.photoUrls[0]} height="250" width="220" />
          </div>
          <div className="post-item">
            <h2 className="index-item-name">{post.petName}</h2>
            <div className="post-age-gender-container">
              <h3 className="index-item-age">{post.petAge === 1 ? "Baby" : post.petAge < 4 ? "Young" : post.petAge < 11 ? "Adult" : "Senior"}</h3>
              <h3 className="index-item-gender">{post.petGender}</h3>
            </div>
            <h3 className="index-item-breed">{post.petBreed}</h3>
          </div>
        </Link>
      </li>
    )
  }

}

export default PostIndexItem;