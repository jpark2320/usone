// IMPORTS

// ACTIONS
const SET_FILTERED_POSTS = "SET_FILTERED_POSTS";

// ACTION CREATORS
function setFilteredPosts(filteredPosts) {
  return { type: SET_FILTERED_POSTS, filteredPosts };
}

// API ACTIONS
function getFilteredPosts(region, category, limit, order, inDescOrder) {
  return dispatch => {
    fetch(`/posts/posts-by-filters/?reg=${region}&cat=${category}}&limit=${limit}&order=${order}&in-desc-order=${inDescOrder}`)
      .then(response => response.json())
      .then(json => dispatch(setFilteredPosts(json)))
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
    default:
      return state;
  }
}

// REDUCER FUNCTIONS

function applySetFilteredPosts(state, action) {
  const { summaryQandaPosts } = action;
  return { ...state, summaryQandaPosts };
}
// EXPORT
const actionCreators = {
  getFilteredPosts
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
