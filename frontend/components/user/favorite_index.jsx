import React from "react";
import FavoriteIndexItem from "./favorite_index_item"
import { Link } from "react-router-dom";

class FavoriteIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { favorites, posts } = this.props
    return (
      <div>
        {favorites.length > 0 ? (
          <div>
            <p>My Favorites ({favorites.length})</p>
            <ul className="self-post-list">
              {favorites.map(favorite => 
                  <FavoriteIndexItem
                    key={favorite.id}
                    favorite={favorite}
                    post={posts[favorite.postId]}
                    photoUrls={posts[favorite.postId].photoUrls}
                  />
              )}
            </ul>
          </div>
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