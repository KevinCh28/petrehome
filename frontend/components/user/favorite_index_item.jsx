import React from "react";

class FavoriteIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    return (
      <div>
        {this.props.favorite.id}
        {/* {this.props.post.petName} */}
      </div>
    )
  }

}

export default FavoriteIndexItem;