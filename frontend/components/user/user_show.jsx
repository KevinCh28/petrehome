import React from "react";
import FavPosts from "./favorite_index_container"

class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFavorites()
    // this.props.userFavPosts(this.props.currentUser.id);
  }

  render() {
    // debugger
    return (
      <div>
        <FavPosts />
      </div>
    )
  }

}

export default UserShow;