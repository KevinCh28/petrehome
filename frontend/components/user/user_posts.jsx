import React from "react";
import FavoriteIndexItem from "./favorite_index_item"

class UserPosts extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const filter = {
      dogOrCat: "",
      petBreed: "",
      petAge: "",
      petGender: ""
    }
    this.props.fetchPosts(filter);
  }

  render() {
    const { posts, openModal } = this.props;

    return (
      <div>
        {posts.length > 0 ? (
          <div>
            <p className="favorite-posts-amount">My Pets ({posts.length})</p>
            <div className="favorite-posts-container">
              {posts.map(favorite =>
                <FavoriteIndexItem
                  key={favorite.id}
                  favorite={favorite}
                />
              )}
            </div>
            <div onClick={() => openModal('createpost')} className='profile-rehome-button'>
              REHOME A PET?
            </div>
          </div>
        ) : (
          <div className="no-favs-container">
            <p className="no-fav-header">
              No Pets Here
            </p>
            <div onClick={() => openModal('createpost')} className='profile-rehome-button'>
              REHOME A PET?
            </div>
          </div>
        )}
      </div>
    )
  }

}

export default UserPosts;