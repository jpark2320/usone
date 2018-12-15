// IMPORTS

// ACTIONS
const SET_FILTERED_POSTS = "SET_FILTERED_POSTS";
const SET_CREATE_POST = "SET_CREATE_POST";

// ACTION CREATORS
function setFilteredPosts(filteredPosts) {
  return {
    type: SET_FILTERED_POSTS,
    filteredPosts
  };
}
<<<<<<< HEAD
function setCreatePost(addedPost) {
  return { 
    type: SET_CREATE_POST, 
    addedPost };
}
=======
>>>>>>> aa3d5e4... draft for posts with pagination

// API ACTIONS
function getFilteredPosts(region, category, limit, order, inDescOrder) {
  return dispatch => {
    fetch(`/posts/posts-by-filters/?reg=${region}&cat=${category}&limit=${limit}&order=${order}&in-desc-order=${inDescOrder}`)
      .then(response => response.json())
      .then(json => dispatch(setFilteredPosts(json)))
      .catch(err => console.log(err));
  };
}

<<<<<<< HEAD
function createPost(tag, title, region, location, description, category) {
  return dispatch => {
    fetch(`/posts/create-post/`, {
      body: JSON.stringify({
        tag,
        title,
        region,
        location,
        description,
        category
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(json => dispatch(setCreatePost(json)))
=======
function getFilteredPostsWithUrlForNextOrPrevPages(PageUrl: string) {
  console.log(PageUrl);
  return dispatch => {
    fetch(PageUrl)
      .then(response => response.json())
      .then(json => dispatch(setFilteredPosts(json)))
>>>>>>> aa3d5e4... draft for posts with pagination
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
    case SET_CREATE_POST:
      return applyCreatePost(state, action);
    default:
      return state;
  }
}

// REDUCER FUNCTIONS
function applySetFilteredPosts(state, action) {
  const { filteredPosts } = action;
  return { ...state, filteredPosts };
}
function applyCreatePost(state, action) {
  const { addedPost } = action;
  return { ...state, addedPost };
}

// EXPORT
const actionCreators = {
  getFilteredPosts,
<<<<<<< HEAD
  createPost
=======
  getFilteredPostsWithUrlForNextOrPrevPages
>>>>>>> aa3d5e4... draft for posts with pagination
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
