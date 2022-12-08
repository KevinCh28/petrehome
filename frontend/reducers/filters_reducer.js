import { UPDATE_FILTER } from '../actions/filter_actions'

const defaultFilters = Object.freeze({
  dogOrCat: "",
  petBreed: "",
  petAge: "",
  petGender: "",
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, state, action.filter);
    default:
      return state;
  }
};

export default filtersReducer;