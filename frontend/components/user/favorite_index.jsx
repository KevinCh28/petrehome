import React from "react";
import FavoriteIndexItem from "./favorite_index_item"
import { Link } from "react-router-dom";

class FavoriteIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFavorites(this.props.userId);
  }

  render() {
    return (
      <div>
        {this.props.favorites.length > 0 ? (
          <ul>
            {
              this.props.favorites.map(favorite => (
                <FavoriteIndexItem
                  key={favorite.id}
                  favorite={favorite}
                  userId={this.props.userId}
                  deleteFavorite={this.props.deleteFavorite}
                />
              ))
            }
          </ul>
        ) : (
          <div className="no-favs-container">
            <p className="no-fav-header">
              No favorites here yet
            </p>
            <p className="no-fav-body">
              When you find a pet you love, add it your favorites list by tapping the 
                <img src={window.favURL} className="no-fav-hearticon"/>
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