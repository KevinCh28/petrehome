import React from "react";

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm = ({}) => (
  <div>
    <label for="dogOrCat">BREED</label>
    <select id="dogOrCat">
      <option value="Dog"></option>
      <option value="Cat"></option>
    </select>
  </div>
);

export default FilterForm;