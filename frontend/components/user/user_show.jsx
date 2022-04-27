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
      <div>
        <div>
          <FavPosts />
        </div>
        <div>
          <UserMessages />
        </div>
      </div>
      
    )
  }

}

export default UserShow;