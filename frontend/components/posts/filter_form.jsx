import React from "react";

const DOGBREEDS = ['Beagle', 'Corgi', 'German Shepherd', 'Pit Bull', 'Poodle', 'Pomsky',
  'Retriever', 'Rottweiler', 'Shiba Inu', 'Yorkshire Terrier'];
const CATBREEDS = ['American Shorthair', 'Abyssinian', 'British Shorthair',
  'Devon Rex', 'Maine Coon', 'Perssian', 'Ragdoll', 'Scottish Fold', 'Shorthair', 'Sphynx'];
const DOGAGES = ['Baby', 'Young', 'Adult', 'Senior'];

class FilterForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dogOrCat: this.props.filters.dogOrCat,
      petAge: this.props.filters.petAge,
      petBreed: this.props.filters.petBreed,
      petGender: this.props.filters.petGender,
    }

    this.renderBreedOptions = this.renderBreedOptions.bind(this);
    this.renderAgeOptions = this.renderAgeOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateFilter(this.state)
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  renderBreedOptions() {
    if (this.state.dogOrCat === "Dog") {
      return (
        DOGBREEDS.map(breed => <option value={breed} key={breed}>{breed}</option>))
    } else {
      return (
        CATBREEDS.map(breed => <option value={breed} key={breed}>{breed}</option>))}
  }

  renderAgeOptions() {
    return (DOGAGES.map(age => <option value={age} key={age}>{age}</option>))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
          <span>Dog or Cat</span>
          <select value={this.state.dogOrCat} onChange={this.update('dogOrCat')} >
            <><option value="" >Any</option>
              <option value="Dog" >Dog</option>
              <option value="Cat" >Cat</option></>
          </select>
        </div>
          
        <div>
          <span>GENDER</span>
          <select value={this.state.petGender} onChange={this.update('petGender')}>
            <><option value="">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option></>
          </select>
        </div>

        <div>
          <span>AGE</span>
          <select value={this.state.petAge} onChange={this.update('petAge')}>
            <><option value="">Any</option>
            {this.renderAgeOptions()}</>
          </select>
        </div>

        <div>
          <span>BREED</span>
          <select value={this.state.petBreed} onChange={this.update('petBreed')}>
            {this.state.dogOrCat === "" ? <option value="">Any</option> : <>{this.renderBreedOptions()}</>}
          </select>
        </div>
          <input type="submit" value="Apply" />
        </form>
      </div>
    )
  }
}

export default FilterForm;