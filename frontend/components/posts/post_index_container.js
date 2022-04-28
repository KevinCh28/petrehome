import { connect } from "react-redux";
import PostIndex from "./post_index";
import { fetchPosts } from "../../actions/post_actions"
import { updateFilter } from "../../actions/filter_actions";

const mapStateToProps = state => {
  return {
    posts: Object.values(state.entities.posts),
    dogOrCat: state.ui.filters.dogOrCat,
    dogBreed: state.ui.filters.dogBreed,
    dogGender: state.ui.filters.dogGender,
    dogAge: state.ui.filters.dogAge,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchPosts: () => dispatch(fetchPosts()),
    fetchPosts: (filter) => dispatch(fetchPosts(filter)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);