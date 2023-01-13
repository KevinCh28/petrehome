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
    this.updateDogOrCat = this.updateDogOrCat.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateGender = this.updateGender.bind(this);
    this.updateBreed = this.updateBreed.bind(this);
    this.clearAllFilter = this.clearAllFilter.bind(this);
  }

  updateDogOrCat(e) {
    const newFilter = {
      dogOrCat: e.target.value,
      petAge: this.state.petAge,
      petBreed: "",
      petGender: this.state.petGender,
    }
    this.setState({ dogOrCat: e.target.value }),
    this.setState({ petBreed: "" })
    this.props.updateFilter(newFilter)
  }

  updateAge(e) {
    const newFilter = {
      dogOrCat: this.state.dogOrCat,
      petAge: e.target.value,
      petBreed: this.state.petBreed,
      petGender: this.state.petGender,
    }
    this.setState({ petAge: e.target.value }),
    this.props.updateFilter(newFilter)
  }

  updateGender(e) {
    const newFilter = {
      dogOrCat: this.state.dogOrCat,
      petAge: this.state.petAge,
      petBreed: this.state.petBreed,
      petGender: e.target.value,
    }
    this.setState({ petGender: e.target.value }),
      this.props.updateFilter(newFilter)
  }

  updateBreed(e) {
    const newFilter = {
      dogOrCat: this.state.dogOrCat,
      petAge: this.state.petAge,
      petBreed: e.target.value,
      petGender: this.state.petGender,
    }
    this.setState({ petBreed: e.target.value }),
      this.props.updateFilter(newFilter)
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

  clearAllFilter() {
    const clearFilter = {
      dogOrCat: "",
      petAge: "",
      petBreed: "",
      petGender: "",
    }
    this.setState({ dogOrCat: "" })
    this.setState({ petBreed: "" })
    this.setState({ petAge: "" })
    this.setState({ petGender: "" })
    this.props.updateFilter(clearFilter)
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
            onChange={this.updateGender}
            className="filters-item-options-button">
          <><option value="">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option></>
          </select>
        </div>

        <div className="filters-item">
          <span className="filters-item-title">AGE</span>
            <select value={this.state.petAge}
              onChange={this.updateAge}
              className="filters-item-options-button">
            <><option value="">Any</option>
            {this.renderAgeOptions()}</>
          </select>
        </div>

        <div className="filters-item">
          <span className="filters-item-title">BREED</span>
          <select value={this.state.petBreed}
            onChange={this.updateBreed}
            className="filters-item-options-button">
            {this.state.dogOrCat === "" ? <option value="">Any</option> : <><option value="">Any</option>{this.renderBreedOptions()}</>}
          </select>
        </div>

        <div onClick={this.clearAllFilter} className="filter-clear-all">
          Clear All
        </div>

      </div>
    )
  }
}

export default FilterForm;