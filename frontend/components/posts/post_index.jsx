import React from "react";
import PostIndexItem from "./post_index_item";
import FilterForm from "./filter_form";

class PostIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.filters);
  }

  render () {
    const { posts } = this.props;

    return (
      <div className="user-show-container">
        <div className="messages-container-wrap">
          <FilterForm
            filters={this.props.filters}
            updateFilter={this.props.updateFilter}
          />
        </div>

        <div className="favorite-posts-container-wrap">
          <div className="favorite-posts-container">
            {posts.map(post =>
              <PostIndexItem
                key={post.id}
                post={post}
              />
            )}
          </div>
        </div>

      </div>
    )
  }

}

export default PostIndex;