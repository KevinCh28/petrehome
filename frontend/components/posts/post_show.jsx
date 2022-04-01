import React from "react";


class PostShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      favorited: false,
    }

    this.handleFav = this.handleFav.bind(this);
    this.favoriteShowButton = this.favoriteShowButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId)
  }

  handleFav(e) {
    e.preventDefault();

    if (this.state.favorited) {
      this.props.deleteFavorite(this.props.userId, this.props.post);
      this.setState({ favorited: false });
    } else {
      this.props.createFavorite(this.props.userId, this.props.post);
      this.setState({ favorited: true });
    }
  }

  favoriteShowButton() {
    const { currentUser } = this.props
    let favButton

    if (currentUser) {
      favButton =
      <div>
        <button onClick={this.handleFav} className="nav-fav-button">
          {this.state.favorited ? <img src={window.favURL} /> : <img src={window.unfavURL} />}
        </button>
      </div>
    } else {
      favButton =
      <div>
        <button onClick={() => this.props.openModal('login')} className="nav-fav-button">
          <img src={window.unfavURL} />
        </button>
      </div>
    }

    return favButton;
  }

  render() {
    const { post } = this.props

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
        
        {this.favoriteShowButton()}
        

      </div>
      
    )
  }

}

export default PostShow;