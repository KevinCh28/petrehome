import React, { useState, useEffect } from "react";
import PostIndexItem from "./post_index_item";
import FilterForm from "./filter_form";
// import { fetchPosts } from "../../actions/post_actions";
// import { updateFilter } from '../../actions/filter_actions';
// import { fetchPosts } from '../../util/post_util';

class PostIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show_more: true,
      maxPost: 16
    };
    this.showMore = this.showMore.bind(this)
    this.showMoreButton = this.showMoreButton.bind(this)
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.filters);
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
    const { posts, filters, updateFilter } = this.props;
    const currentPosts = posts.slice(0, this.state.maxPost);

    return (
      <div className="post-index-container">
        <div className="filter-container-wrap">
          <FilterForm
            filters={filters}
            updateFilter={updateFilter}
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
      </div>
    )
  }
}

// const PostIndex = () => {
//   let initialFilters = {
//     dogOrCat: "",
//     petAge: "",
//     petBreed: "",
//     petGender: "",
//   };
//   const [filters, setFilters] = useState(initialFilters);
//   const [posts, setPosts] = useState([]);
//   const [showMore, setShowMore] = useState(true);
//   const [maxPost, setMaxPost] = useState(16);

//   // useEffect(() => {
//   //   updateFilter(filters)
//   // }, []);

//   const showMorePost = () => {
//     if (maxPost + 16 >= posts.length) {
//       setShowMore(false)
//       setMaxPost(maxPost + 16)
//     } else {
//       setMaxPost(maxPost + 16)
//     }
//   };

//   const showMoreButton = () => {
//     let returnButton;
//     if (showMore) {
//       returnButton =
//         <div onClick={showMorePost} className="post-show-more-button">
//           <span>SHOW MORE!</span>
//         </div>
//     } else {
//       returnButton = null
//     }
//     return returnButton;
//   }

//   useEffect(() => {
//     fetchPosts(filters)
//       .then(response => setPosts(Object.values(response).reverse()))
//   }, [filters])

//   return (
//     <div className="post-index-container">
//       <div className="filter-container-wrap">
//         <FilterForm
//           // filters={filters}
//           // updateFilter={updateFilter}
//         />
//       </div>

//       {posts.length === 0 ?
//         <div className="no-pets-found">
//           No pets found, please try other search criterias
//         </div>
//         :
//         <div className="favorite-posts-container-wrap">
//           <div className="favorite-posts-container">
//             {posts.slice(0, maxPost).map(post =>
//               <PostIndexItem
//                 key={post.id}
//                 post={post}
//               />
//             )}
//           </div>
//           {showMoreButton()}
//         </div>
//       }
//     </div>
//   )
// }

export default PostIndex;