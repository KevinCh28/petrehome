import React from "react";
import { Link } from "react-router-dom";

class FavoriteIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <Link to={`/posts/${this.props.favorite.post_id}`} >{this.props.favorite.pet_name}</Link>
        
      </div>
    )
  }

}

export default FavoriteIndexItem;