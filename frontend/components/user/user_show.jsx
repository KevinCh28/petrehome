import React from "react";
import UserPosts from "./user_posts_container";
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
        <div className="user-posts-container-wrap">
          <UserPosts />
        </div>
      </div>
      
    )
  }

}

export default UserShow;