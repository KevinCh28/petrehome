import React from "react";
import FavPosts from "./favorite_index_container";
import UserMessages from "./message_index_container";

class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return (
      <div className="user-show-container">
        <div className="messages-container-wrap">
          <UserMessages />
        </div>
        <div className="favorite-posts-container-wrap">
          <FavPosts />
        </div>
      </div>
      
    )
  }

}

export default UserShow;