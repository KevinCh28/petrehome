import React from "react";
import PostIndexItem from "./post_index_item";
import FilterForm from "./filter_form";

class PostIndex extends React.Component {
  constructor(props) {
    super(props)
    // this.maxPost = 0;
    this.state = {
      show_more: true,
      maxPost: 16
    };
    this.showMore = this.showMore.bind(this)
    this.showMoreButton = this.showMoreButton.bind(this)
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.filters);
    // this.maxPost += 16;
  }

  showMore() {
    if (this.state.maxPost + 16 >= this.props.posts.length) {
      this.setState({ show_more: false })
      this.setState({ maxPost: this.state.maxPost += 16 })
    } else {
      this.setState({ maxPost: this.state.maxPost += 16 })
    }
  }

  showMoreButton() {
    let returnButton; 
    if (this.state.show_more) {
      returnButton =
      <div onClick={this.showMore} className="post-show-more-button">
        <span>SHOW MORE!</span>
      </div>
    } else {
      returnButton = null
    }
    return returnButton;
  }

  render () {
    const { posts } = this.props;
    const currentPosts = posts.slice(0, this.state.maxPost);

    return (
      <div className="user-show-container">
        <div className="messages-container-wrap">
          <FilterForm
            filters={this.props.filters}
            updateFilter={this.props.updateFilter}
          />
        </div>

        {currentPosts.length === 0 ? 
        <div className="no-pets-found">
          No pets found, please try other search criterias
        </div>
        :
          <div className="favorite-posts-container-wrap">
            <div className="favorite-posts-container">
              {currentPosts.map(post =>
                <PostIndexItem
                  key={post.id}
                  post={post}
                />
              )}
            </div>
            {this.showMoreButton()}
          </div>
        }
        {/* <div className="favorite-posts-container-wrap">
          <div className="favorite-posts-container">
            {currentPosts.map(post =>
              <PostIndexItem
                key={post.id}
                post={post}
              />
            )}
          </div>
          {this.showMoreButton()}
        </div> */}

      </div>
    )
  }

}

export default PostIndex;