// IMPORTS

// ACTIONS
const SET_SUMMARY_RENT_POSTS = "SET_SUMMARY_RENT_POSTS";

// ACTION CREATORS
function setSummaryRentPosts(summaryRentPosts) {
  return { type: SET_SUMMARY_RENT_POSTS, summaryRentPosts };
}

// API ACTIONS
function getSummaryRentPosts(region, limit, order, inDescOrder) {
  return dispatch => {
    fetch(`/posts/posts-by-filters/?reg=${region}&cat=rent&limit=${limit}&order=${order}&in-desc-order=${inDescOrder}`)
      .then(response => response.json())
      .then(json => dispatch(setSummaryRentPosts(json)))
      .catch(err => console.log(err));
  };
}

// INITIAL STATE
const initialState = {};

// REDUCER
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUMMARY_RENT_POSTS:
      return applySetSummaryRentPosts(state, action);
    default:
      return state;
  }
}

// REDUCER FUNCTIONS
function applySetSummaryRentPosts(state, action) {
  const { summaryRentPosts } = action;
  return { ...state, summaryRentPosts };
}
// EXPORT
const actionCreators = {
  getSummaryRentPosts
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
