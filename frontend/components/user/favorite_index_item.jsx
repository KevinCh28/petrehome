import React from "react";
import { Link } from "react-router-dom";

class FavoriteIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { favorite } = this.props;

    if (!favorite.photoUrls) return null;

    return (
      <div className="post-index-item">
        <Link 
          to={`/posts/${favorite.id}`}
          className="index-show-link">
            <div>
              <img src={favorite.photoUrls[0]} className="post-index-item-img" />
            </div>
            <div className="post-item">
            <h2 className="index-item-name">{favorite.petName}</h2>
              <div className="post-age-gender-container">
                <h3 className="index-item-age">{favorite.petAge === 1 ? "Baby" : favorite.petAge < 3 ? "Young" : "Adult"}</h3>
                <h3 className="index-item-gender">{favorite.petGender}</h3>
              </div>
            <h3 className="index-item-breed">{favorite.petBreed}</h3>
            </div>
        </Link>
      </div>
    )
  }
}

export default FavoriteIndexItem;