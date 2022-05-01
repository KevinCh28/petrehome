import { connect } from "react-redux";
import PostIndex from "./post_index";
import { fetchPosts } from "../../actions/post_actions"
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => {
  return {
    posts: Object.values(state.entities.posts),
    filters: state.ui.filters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchPosts: () => dispatch(fetchPosts()),
    fetchPosts: (filter) => dispatch(fetchPosts(filter)),
    updateFilter: (filter) => dispatch(updateFilter(filter)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);