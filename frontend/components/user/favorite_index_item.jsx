import React from "react";
import { Link } from "react-router-dom";

class FavoriteIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { favorite, post } = this.props
    console.log(post)
    return (
      <div>
        <Link to={`/posts/${favorite.postId}`} >{post.petName}</Link>
      </div>
    )
  }

}

export default FavoriteIndexItem;