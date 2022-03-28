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
      <div>
        <h2>{post.petName}</h2>
        <li>Age: {post.petAge}</li>
        <li>Gender: {post.petGender}</li>
        <li>Breed: {post.petBreed}</li>
      </div>
    )
  }

}

export default PostShow;