// IMPORTS

// ACTIONS
const SET_ALL_POSTS = "SET_ALL_POSTS";
const SET_POSTS_BY_REGION = "SET_POSTS_BY_REGION";

// ACTION CREATORS
function setAllPosts(allPosts) {
  return {
    type: SET_ALL_POSTS,
    allPosts
  };
}

function setPostsByRegion(postsByRegion) {
  return { 
    type: SET_POSTS_BY_REGION, 
    postsByRegion 
  };
}

// API ACTIONS
function getAllPosts() {
  return dispatch => {
    fetch("/posts/all-posts/")
      .then(response => response.json())
      .then(json => dispatch(setAllPosts(json)))
      .catch(err => console.log(err));
  };
}

function getPostsByRegion(region) {
  return dispatch => {
    console.log(`/posts/posts-by-region/?q=${region}`);
    fetch(`/posts/posts-by-region/?q=${region}`)
      .then(response => response.json())
      .then(json => dispatch(setPostsByRegion(json)))
      .catch(err => console.log(err));
  };
}

// INITIAL STATE
const initialState = {};

// REDUCER
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_POSTS:
      return applySetAllPosts(state, action);
    case SET_POSTS_BY_REGION:
      return applySetPostsByRegion(state, action);
    default:
      return state;
  }
}

// REDUCER FUNCTIONS
function applySetAllPosts(state, action) {
  const { allPosts } = action;
  return {
    ...state,
    allPosts
  };
}

function applySetPostsByRegion(state, action) {
  const { postsByRegion } = action;
  return { 
    ...state, 
    postsByRegion };
}
// EXPORT
const actionCreators = {
  getAllPosts,
  getPostsByRegion
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
