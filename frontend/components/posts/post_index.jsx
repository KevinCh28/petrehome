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
    return (
      <div>
        <div>
          <ul className="self-post-list">
            {
              this.props.posts.map(post => (
                <PostIndexItem
                  key={post.id}
                  post={post}
                />
              ))
            }
          </ul>
        </div>
        
        <div>
          <FilterForm 
            filters={this.props.filters}
            updateFilter= {this.props.updateFilter}
          />
        </div>
      </div>
    )
  }

}

export default PostIndex;