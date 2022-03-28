import React from "react";
import FavPosts from "./favorite_index_container"

class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <FavPosts />
      </div>
    )
  }

}

export default UserShow;