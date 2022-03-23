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

    return (
      <div>
        <h2>{post.pet_name}</h2>
        <li>Age: {post.pet_age}</li>
        <li>Gender: {post.pet_gender}</li>
        <li>Breed: {post.pet_breed}</li>
      </div>
    )
  }

}

export default PostShow;