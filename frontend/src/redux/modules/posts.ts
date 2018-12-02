// IMPORTS

// ACTIONS
const SET_SUMMARY_POSTS = "SET_SUMMARY_POSTS";

// ACTION CREATORS
function setSummaryPosts(summaryPosts) {
  return { 
    type: SET_SUMMARY_POSTS, 
    summaryPosts 
  };
}

// API ACTIONS
function getSummaryPosts(region, category, limit, order, inDescOrder) {
  console.log(`/posts/posts-by-filters/?reg=${region}&cat=${category}&limit=${limit}&order=${order}&inDescOrder=${inDescOrder}`);
  return dispatch => {
    fetch(
      `/posts/posts-by-filters/?reg=${region}&cat=${category}&limit=${limit}&order=${order}&inDescOrder=${inDescOrder}`
    )
      .then(response => response.json())
      .then(json => dispatch(setSummaryPosts(json)))
      .catch(err => console.log(err));
  };
}

// INITIAL STATE
const initialState = {};

// REDUCER
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUMMARY_POSTS:
      return applySetSummaryPosts(state, action);
    default:
      return state;
  }
}

// REDUCER FUNCTIONS
function applySetSummaryPosts(state, action) {
  const { summaryPosts } = action;
  return { ...state, summaryPosts };
}
// EXPORT
const actionCreators = {
  getSummaryPosts
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
