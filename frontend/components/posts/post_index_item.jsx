import React from "react";
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <li>
          <Link to={`/posts/${this.props.post.id}`}>
            {/* <img src={this.props.post.imageUrl}/> */}
            <span>{this.props.post.pet_name}</span>
          </Link>
        </li>
      </div>
    )
  }

}

export default PostIndexItem;