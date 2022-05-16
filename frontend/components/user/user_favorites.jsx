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
      <div className="favorite-post-container-wrap">
        <div className="favorite-post-container">
          <FavPosts />
        </div>
      </div>

    )
  }

}

export default UserFavorite;