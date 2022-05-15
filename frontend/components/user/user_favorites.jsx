import React from "react";
import FavPosts from "./favorite_index_container";

class UserFavorite extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return (
      <div>
        <div className="favorite-posts-container-wrap">
          <FavPosts />
        </div>
      </div>

    )
  }

}

export default UserFavorite;