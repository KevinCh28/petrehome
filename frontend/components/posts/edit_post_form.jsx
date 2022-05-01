import React from "react";

const DOGBREEDS = ['Beagle', 'Corgi', 'German Shepherd', 'Pit Bull', 'Poodle', 'Pomsky',
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
        DOGBREEDS.map(breed => <option value={breed}>{breed}</option>))
    } else if (this.state.dogOrCat === "") {
      return <option value="">Any</option>
    } else {
      return (
        CATBREEDS.map(breed => <option value={breed}>{breed}</option>))
    }
  }

  renderAgeOptions() {
    let ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (ages.map(age => <option value={age}>{age}</option>))
  }

  render() {
    return (
      <div>
        <div>
          <h3>Edit Post</h3>

          <form onSubmit={this.handleSubmit}>
            <div onClick={this.props.closeModal} className="modal-x">X</div>
            <div>
              <label>Name
                <input 
                type="text" 
                value={this.state.petName} 
                onChange={this.update('petName')} />
              </label>
            </div>
            
            <div>
              <span>Age</span>
              <select value={this.state.petAge} onChange={this.update('petAge')} >
                <>{this.renderAgeOptions()}</>
              </select>
            </div>

            <span>Breed</span>
            <select value={this.state.petBreed} onChange={this.update('petBreed')} >
              <>{this.renderBreedOptions()}</>
            </select>

            <div>
              <span>GENDER</span>
              <select value={this.state.petGender} onChange={this.update('petGender')}>
                <><option value="Dog">Male</option>
                  <option value="Female">Female</option></>
              </select>
            </div>

            <div>
              <span>Type</span>
              <select value={this.state.dogOrCat} onChange={this.update('dogOrCat')} >
                <><option value="Dog" >Dog</option>
                  <option value="Cat" >Cat</option></>
              </select>
            </div>

            <input type="submit" value="Edit Post" />
          </form>
        </div>
      </div>
    )
  }

}

export default EditPostForm;