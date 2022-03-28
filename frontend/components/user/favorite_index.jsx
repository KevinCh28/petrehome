import React from "react";
import FavoriteIndexItem from "./favorite_index_item"

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
      </div>
    )
  }

}

export default FavoriteIndex;