// IMPORTS

// ACTIONS
const SET_ALL_POSTS = "SET_ALL_POSTS";

// ACTION CREATORS
function setAllPosts(allPosts) {
  return {
    type: SET_ALL_POSTS,
    allPosts
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

// INITIAL STATE
const initialState = {};

// REDUCER
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_POSTS:
      return applySetAllPosts(state, action);
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

// EXPORT
const actionCreators = {
  getAllPosts
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
