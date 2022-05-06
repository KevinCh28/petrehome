import React from "react";

const DOGBREEDS = ['Beagle', 'Border Collie', 'Corgi', 'German Shepherd', 'Pit Bull', 'Poodle', 'Pomsky',
  'Retriever', 'Rottweiler', 'Shiba Inu', 'Yorkshire Terrier'];
const CATBREEDS = ['American Shorthair', 'Abyssinian', 'British Shorthair',
  'Devon Rex', 'Maine Coon', 'Perssian', 'Ragdoll', 'Scottish Fold', 'Shorthair', 'Sphynx'];

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pet_name: "", 
      pet_age: 1, 
      pet_gender: "Male",
      pet_breed: "Unknown",
      dog_or_cat: "Dog",
      author_id: props.currentUser.id,
      photoFiles: null,
      // photos: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.renderBreedOptions = this.renderBreedOptions.bind(this);
    this.renderAgeOptions = this.renderAgeOptions.bind(this);
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
      .then(this.props.closeModal)
  }

  handleFile(e) {
    e.preventDefault();
    this.setState({ photoFiles: e.currentTarget.files });
  }

  renderBreedOptions() {
    if (this.state.dog_or_cat === "Dog") {
      return (
        DOGBREEDS.map(breed => <option value={breed} key={breed}>{breed}</option>))
    } else if (this.state.dog_or_cat === "") {
      return <option value="" key="Any">Any</option>
    } else {
      return (
        CATBREEDS.map(breed => <option value={breed} key={breed}>{breed}</option>))
    }
  }

  renderAgeOptions() {
    let ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
      ages.map(age => <option value={age} key={age}>{age}</option>)
    )
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  componentWillUnmount() {
    this.props.removeErrors()
  }

  render() {
    return (
      <div>
        <div>
          <h3 className="post-form-title">Rehome a Pet</h3>
          <div onClick={this.props.closeModal} className="modal-x">X</div>
          {this.renderErrors()}
          <div className="post-form-item">
            <label className="post-form-item-title">Pet's Name
              <input type="text"
                value={this.state.pet_name}
                onChange={this.update('pet_name')}
                className="post-form-name-textbox"/>
            </label>
          </div>

          <div className="post-form-item">
            <span className="post-form-item-title">Type</span>
            <select value={this.state.dog_or_cat}
            onChange={this.update('dog_or_cat')} 
            className="post-form-item-options-button">
              <><option value="Dog" >Dog</option>
                <option value="Cat" >Cat</option></>
            </select>
          </div>

          <div className="post-form-item">
            <span className="post-form-item-title">Age</span>
              <select value={this.state.pet_age}
              onChange={this.update('pet_age')}
              className="post-form-item-options-button">
                <>{this.renderAgeOptions()}</>
              </select>
            </div>

          <div className="post-form-item">
            <span className="post-form-item-title">Breed</span>
              <select value={this.state.pet_breed}
              onChange={this.update('pet_breed')}
              className="post-form-item-options-button">
                <><option value="Unknown" >Unknown</option>
                {this.renderBreedOptions()}</>
              </select>
            </div>
            
          <div className="post-form-item">
            <span className="post-form-item-title">GENDER</span>
              <select value={this.state.pet_gender}
              onChange={this.update('pet_gender')}
              className="post-form-item-options-button">
                <><option value="Dog">Male</option>
                  <option value="Female">Female</option></>
              </select>
            </div>

            <label>
              <input type="file" onChange={this.handleFile} multiple/>
            </label>

          <div onClick={this.handleSubmit} className="post-form-submit-button">
            Create Post
          </div>

        </div>
      </div>
    )
  }

}

export default PostForm;