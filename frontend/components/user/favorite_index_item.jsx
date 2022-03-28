import React from "react";

class FavoriteIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.favorite.petName}
        {/* {this.props.post.petName} */}
      </div>
    )
  }

}

export default FavoriteIndexItem;