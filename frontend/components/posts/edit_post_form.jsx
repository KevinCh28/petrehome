import React from "react";

class EditPostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.post

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.post.id)
      // .then(action => {
      //   const post = action.post.data
      //   this.props.ownerId === post.author_id
      //     ? this.setState(post)
      //     : this.props.history.replace("/posts")
      // })
  }



  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let {petName, petBreed, petGender, petAge, dogOrCat, authorId, photoFiles} = this.state
    const post = {
      pet_name: petName,
      pet_age: petAge,
      pet_gender: petGender,
      pet_breed: petBreed,
      dog_or_cat: dogOrCat,
      author_id: authorId,
      photos: photoFiles,
    }

    console.log(this.state)
    console.log(post)
    console.log(this.state.photoFiles)

    this.props.editPost(this.props.post.id, post)
  }

  render() {
    return (
      <div>
        <div>
          <h3>Edit Post</h3>

          <form onSubmit={this.handleSubmit}>
            <div onClick={this.props.closeModal} className="modal-x">X</div>
            <label>Name
              <input 
              type="text" 
              value={this.state.petName} 
              onChange={this.update('petName')} />
            </label>

            <label>Age
              <input type="text" value={this.state.petAge} onChange={this.update('petAge')} />
            </label>

            <label>Breed
              <input type="text" value={this.state.petBreed} onChange={this.update('petBreed')} />
            </label>

            <label>Gender
              <input type="text" value={this.state.petGender} onChange={this.update('petGender')} />
            </label>

            <label>Type
              <input type="text" value={this.state.dogOrCat} onChange={this.update('dogOrCat')} />
            </label>

            <input type="submit" value="Edit Post" />
          </form>
        </div>
      </div>
    )
  }

}

export default EditPostForm;