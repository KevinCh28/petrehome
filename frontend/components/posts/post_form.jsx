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
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.createPost(post);
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

            <div>
              <button>Add Photos</button>
            </div>

            <input type="submit" value="Create Post"/>
          </form>
        </div>
      </div>
    )
  }

}

export default PostForm;