import React from "react";

const DOGBREEDS = ['Beagle', 'Border Collie', 'Corgi', 'German Shepherd', 'Pit Bull', 'Poodle', 'Pomsky',
  'Retriever', 'Rottweiler', 'Shiba Inu', 'Yorkshire Terrier'];
const CATBREEDS = ['American Shorthair', 'Abyssinian', 'British Shorthair',
  'Devon Rex', 'Maine Coon', 'Perssian', 'Ragdoll', 'Scottish Fold', 'Shorthair', 'Sphynx'];

class EditPostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.post
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderBreedOptions = this.renderBreedOptions.bind(this);
    this.renderAgeOptions = this.renderAgeOptions.bind(this);
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
    this.props.editPost(this.props.post.id, post)
      .then(this.props.closeModal)
  }

  renderBreedOptions() {
    if (this.state.dogOrCat === "Dog") {
      return (
        DOGBREEDS.map(breed => <option value={breed} key={breed}>{breed}</option>))
    } else if (this.state.dogOrCat === "") {
      return <option value="">Any</option>
    } else {
      return (
        CATBREEDS.map(breed => <option value={breed} key={breed}>{breed}</option>))
    }
  }

  renderAgeOptions() {
    let ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (ages.map(age => <option value={age} key={age}>{age}</option>))
  }

  renderErrors() {
    return (
      <div className="session-error-messages">
        {this.props.errors.map((error, i) => (
          <div key={i}>
            {error}
          </div>
        ))}
      </div>
    )
  }

  componentWillUnmount() {
    this.props.removeErrors()
  }

  render() {
    return (
      <div className="post-form-container">
        
          <div className="post-form-title">Edit Post</div>
          <div onClick={this.props.closeModal} className="modal-x">X</div>
        <div className="post-form-item">
          <div className="session-form-field">
            <label className="session-form-text">Pet's Name</label>
            <input type="text"
              value={this.state.petName}
              onChange={this.update('petName')}
              className="session-form-input" />
          </div>

          <div className="session-form-field">
            <label className="session-form-text">Type</label>
            <select value={this.state.dogOrCat}
              onChange={this.update('dogOrCat')}
              className="session-form-input">
              <><option value="Dog">Dog</option>
                <option value="Cat">Cat</option></>
            </select>
          </div>
            
          <div className="session-form-field">
            <label className="session-form-text">Age</label>
            <select value={this.state.petAge}
              onChange={this.update('petAge')}
              className="session-form-input">
              <>{this.renderAgeOptions()}</>
            </select>
          </div>

          <div className="session-form-field">
            <label className="session-form-text">Breed</label>
            <select value={this.state.petBreed}
              onChange={this.update('petBreed')}
              className="session-form-input">
              <><option value="Unknown" >Unknown</option>
                {this.renderBreedOptions()}</>
            </select>
          </div>
            
          <div className="session-form-field">
            <label className="session-form-text">Gender</label>
            <select value={this.state.petGender}
              onChange={this.update('petGender')}
              className="session-form-input">
              <><option value="Dog">Male</option>
                <option value="Female">Female</option></>
            </select>
          </div>

          <div onClick={this.handleSubmit} className="post-form-submit-button">
            Edit Post
          </div>
          {this.renderErrors()}

        </div>
      </div>
    )
  }

}

export default EditPostForm;