import React from "react";

const DOGBREEDS = ['Beagle', 'Border Collie', 'Corgi', 'German Shepherd', 'Pit Bull', 'Poodle', 'Pomsky',
  'Retriever', 'Rottweiler', 'Shiba Inu', 'Yorkshire Terrier'];
const CATBREEDS = ['American Shorthair', 'Abyssinian', 'British Shorthair',
  'Devon Rex', 'Maine Coon', 'Perssian', 'Ragdoll', 'Scottish Fold', 'Shorthair', 'Sphynx'];
const DOGAGES = ['Baby', 'Young', 'Adult', 'Senior'];

class FilterForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dogOrCat: "",
      petAge: "",
      petBreed: "",
      petGender: "",
    }

    this.renderBreedOptions = this.renderBreedOptions.bind(this);
    this.renderAgeOptions = this.renderAgeOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDogOrCat = this.updateDogOrCat.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateFilter(this.state)
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  updateDogOrCat(e) {
    return (
      this.setState({ dogOrCat: e.target.value }),
      this.setState({ petBreed: "" })
    )
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

  componentDidMount() {
    this.props.updateFilter(this.state);
  }

  render() {
    return (
      <div className="filters-container">

        <div className="filters-item">
          <span className="filters-item-title">Dog or Cat</span>
            <select value={this.state.dogOrCat}
              onChange={this.updateDogOrCat}
              className="filters-item-options-button">
            <><option value="" >Any</option>
              <option value="Dog" >Dog</option>
              <option value="Cat" >Cat</option></>
          </select>
        </div>
          
        <div className="filters-item">
          <span className="filters-item-title">GENDER</span>
          <select value={this.state.petGender}
            onChange={this.update('petGender')}
            className="filters-item-options-button">
          <><option value="">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option></>
          </select>
        </div>

        <div className="filters-item">
          <span className="filters-item-title">AGE</span>
            <select value={this.state.petAge}
              onChange={this.update('petAge')}
              className="filters-item-options-button">
            <><option value="">Any</option>
            {this.renderAgeOptions()}</>
          </select>
        </div>

        <div className="filters-item">
          <span className="filters-item-title">BREED</span>
          <select value={this.state.petBreed}
            onChange={this.update('petBreed')}
            className="filters-item-options-button">
            {this.state.dogOrCat === "" ? <option value="">Any</option> : <><option value="">Any</option>{this.renderBreedOptions()}</>}
          </select>
        </div>

        <div onClick={this.handleSubmit} className="filters-submit-button">
          APPLY
        </div>

      </div>
    )
  }
}

export default FilterForm;