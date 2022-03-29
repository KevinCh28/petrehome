import React from "react";


class PostShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId)
  }

  render() {
    const { post } = this.props

    if (!post) return null;

    return (
      <div className="main">
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
      </div>
      
    )
  }

}

export default PostShow;