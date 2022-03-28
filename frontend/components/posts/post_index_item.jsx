import React from "react";
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          <Link to={`/posts/${this.props.post.id}`}>
            {this.props.post.petName}
          </Link>
        </div>
        <div>
          <ul>
            <li>{this.props.post.petAge}</li>
            <li>{this.props.post.petBreed}</li>
            <li>{this.props.post.petGender}</li>
          </ul>
        </div>
      </div>
    )
  }

}

export default PostIndexItem;