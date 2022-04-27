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
        if (payload.post.favPosts) {
          this.setState({ favorited: true })
        }
      })
    this.props.fetchFavorites(this.props.currentUser.id)
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
        <div onClick={this.handleClick} >
          <img src={window.favURL} />
        </div>
    } else if (!currentUser) {
      favButton =
        <div onClick={() => this.props.openModal('login')} >
          <img src={window.unfavURL} />
        </div>
    } else {
      favButton =
        <div onClick={this.handleClick} >
          <img src={window.unfavURL} />
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
              <img src={`${photo}`} className="post-image"/>
            ))
          }
        </div>

        <div className="pet-info-container">
          <div className="pet-name">
            <p>{post.petName}</p>
          </div>
          <div className="pet-about-container">
            About
            <div className="pet-about">
              <p>{post.dogOrCat}</p>
              <p>{post.petBreed}</p>
              <p>{post.petAge}</p>
              <p>{post.petGender}</p>
            </div>
          </div>
        </div>
        <div onClick={() => openModal('inquiry')} >
          START YOUR INQUIRY
        </div>
        {this.favoriteButton()}
        {
          post.authorId === userId
            ? <button onClick={() => openModal('editpost')} >Edit Post</button>
            : null
        }
      </div>
      
    )
  }

}

export default PostShow;