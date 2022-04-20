import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pet_name: "", 
      pet_age: "", 
      pet_gender: "",
      pet_breed: "",
      dog_or_cat: "",
      author_id: props.currentUser.id,
      photoFiles: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = new FormData();
    const { photoFiles } = this.state;

    post.append('post[pet_name]', this.state.pet_name);
    post.append('post[pet_age]', this.state.pet_age);
    post.append('post[pet_gender]', this.state.pet_gender);
    post.append('post[pet_breed]', this.state.pet_breed);
    post.append('post[dog_or_cat]', this.state.dog_or_cat);
    post.append('post[author_id]', this.state.author_id);

    if (photoFiles) {
      for (let i = 0; i < photoFiles.length; i++) {
        post.append('post[photos][]', photoFiles[i]);
      }
    }
    this.props.createPost(post)
      .then(this.props.closeModal);

  }

  handleFile(e) {
    e.preventDefault();
    this.setState({ photoFiles: e.currentTarget.files });
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Rehome a Pet</h3>

          <form onSubmit={this.handleSubmit}>
            <div onClick={this.props.closeModal} className="modal-x">X</div>
            <label>Name
              <input type="text" value={this.state.pet_name} onChange={this.update('pet_name')}/>
            </label>

            <label>Age
              <input type="text" value={this.state.pet_age} onChange={this.update('pet_age')}/>
            </label>

            <label>Breed
              <input type="text" value={this.state.pet_breed} onChange={this.update('pet_breed')}/>
            </label>

            <label>Gender
              <input type="text" value={this.state.pet_gender} onChange={this.update('pet_gender')}/>
            </label>

            <label>Type
              <input type="text" value={this.state.dog_or_cat} onChange={this.update('dog_or_cat')}/>
            </label>

            <label>
              <input type="file" onChange={this.handleFile} multiple/>
            </label>

            <input type="submit" value="Create Post"/>
          </form>
        </div>
      </div>
    )
  }

}

export default PostForm;