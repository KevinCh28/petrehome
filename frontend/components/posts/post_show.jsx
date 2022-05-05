import React from "react";

class PostShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      favorited: false,
    }

    this.favoriteButton = this.favoriteButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId)
      .then(payload => {
        if (this.props.currentUser && payload.post.favPosts) {
          this.setState({ favorited: true })
        }
      })
    if (this.props.currentUser) {
      this.props.fetchFavorites(this.props.currentUser.id)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.postId !== prevProps.match.params.postId) {
      this.props.fetchPost(this.props.match.params.postId)
    }
  }

  favoriteButton() {
    let favButton;
    const { currentUser, favorites } = this.props

    if (currentUser && this.state.favorited) {
      favButton =
        <div onClick={this.handleClick} className="post-fav-button">
          <img src={window.favURL} key={"faved"}/>
          <span>FAVORITE</span>
        </div>
    } else if (!currentUser) {
      favButton =
        <div onClick={() => this.props.openModal('login')} 
        className="post-fav-button">
          <img src={window.unfavURL} key={"unfaved"}/>
          <span>FAVORITE</span>
        </div>
    } else {
      favButton =
        <div onClick={this.handleClick} className="post-fav-button">
          <img src={window.unfavURL} key={"unfaved"}/>
          <span>FAVORITE</span>
        </div>
    }
    return favButton;
  }

  handleClick(e) {
    e.preventDefault();
    const { favorites, deleteFavorite, createFavorite, userId, post } = this.props
    if (this.state.favorited) {
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].postId === post.id) {
          let favoriteId = favorites[i].id
          deleteFavorite(userId, favoriteId)
          this.setState({ favorited: false })
        }
      }
    } else {
      createFavorite(userId, { post_id: post.id })
      this.setState({ favorited: true })
    }
  }

  render() {
    const { post, userId, openModal } = this.props

    if (!post) return null;
    if (!post.photoUrls) return null;

    return (
      <div>

        <div className="post-image-container">
          {
            post.photoUrls.map(photo => (
              <img src={`${photo}`} className="post-image" key={photo}/>
            ))
          }
        </div>
          <div className="pet-info-container">
            <div className="pet-decription-container">
              <div className="pet-name">
                <p>{post.petName}</p>
              </div>

              <div className="pet-about-container">
                About
                <div className="pet-about">
                  <p>Age: {post.petAge}</p>
                  <p>Breed: {post.petBreed}</p>
                  <p>Gender: {post.petGender}</p>
                </div>
              </div>

            </div>

            <div className="pet-buttons-container">
              <span className="pet-buttons-container-message">
                Considering {post.petName} for adoption?
              </span>
              {this.props.currentUser ? (
              <div onClick={() => openModal('inquiry')} className="post-form-submit-button">
                START YOUR INQUIRY
              </div>
            ) : (
              <div onClick={() => openModal('login')} className="post-form-submit-button">
                START YOUR INQUIRY
              </div>
            )}

            {this.favoriteButton()}
            {post.authorId === userId
              ? <div onClick={() => openModal('editpost')} className="post-form-submit-button">
                  EDIT POST
                </div>
              : null
            }
          </div>
        </div>
      </div>
      
    )
  }

}

export default PostShow;