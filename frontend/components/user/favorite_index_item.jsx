import React from "react";

class FavoriteIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.favorite.postId}
        {/* {this.props.post.petName} */}
      </div>
    )
  }

}

export default FavoriteIndexItem;