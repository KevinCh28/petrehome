import React from "react";
import FavoriteIndexItem from "./favorite_index_item"
import { Link } from "react-router-dom";

class FavoriteIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { favorites } = this.props;

    return (
      <div>
        {favorites.length > 0 ? (
          <div className="favorite-post-container">
            <p className="favorite-posts-amount">My Favorites ({favorites.length})</p>
            <div className="favorite-posts-container">
              {favorites.map(favorite =>
                <FavoriteIndexItem
                  key={favorite.id}
                  favorite={favorite}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="no-favs-container">
            <p className="no-fav-header">
              No favorites here yet
            </p>
            <p className="no-fav-body">
              When you find a pet you love, add it your favorites list by clicking the favorite button!
            </p>
              
            <div>
                <Link to="/posts" className="no-fav-more-pets">MORE PETS</Link>
            </div>
              
          </div>
          
        )}
        
      </div>
    )
  }

}

export default FavoriteIndex;