// IMPORTS

// ACTIONS
const SET_FILTERED_POSTS = "SET_FILTERED_POSTS";
const SET_ADD_POST = "SET_ADD_POST";

// ACTION CREATORS
function setFilteredPosts(filteredPosts) {
  return {
    type: SET_FILTERED_POSTS,
    filteredPosts
  };
}
function setAddPost(addedPost) {
  return { 
    type: SET_ADD_POST,
    addedPost
   };
}

// API ACTIONS
function getFilteredPosts(region, category, limit, order, inDescOrder) {
  return dispatch => {
    fetch(`/posts/posts-by-filters/?reg=${region}&cat=${category}&limit=${limit}&order=${order}&in-desc-order=${inDescOrder}`)
      .then(response => response.json())
      .then(json => dispatch(setFilteredPosts(json)))
      .catch(err => console.log(err));
  };
}

function addPost(tag, title, location, content, category) {
  return dispatch => {
  fetch(`/posts/post/add/?tag=${tag}&title=${title}&region=${location}&category=${category}&description=${content}`)
    .then(response => response.json())
    .then(json => dispatch(setAddPost(json)))
    .catch(err => console.log(err));
  };
}

// INITIAL STATE
const initialState = {};

// REDUCER
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTERED_POSTS:
      return applySetFilteredPosts(state, action);
    case SET_ADD_POST:
      return applyAddPost(state, action);
    default:
      return state;
  }
}

// REDUCER FUNCTIONS
function applySetFilteredPosts(state, action) {
  const { filteredPosts } = action;
  return { ...state, filteredPosts };
}
function applyAddPost(state, action) {
  const { addedPost } = action;
  return { ...state, addedPost };
}

// EXPORT
const actionCreators = {
  getFilteredPosts,
  addPost
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
