// IMPORTS

// ACTIONS
const SET_SUMMARY_WORK_POSTS = "SET_SUMMARY_WORK_POSTS";

// ACTION CREATORS
function setSummaryWorkPosts(summaryWorkPosts) {
  return { type: SET_SUMMARY_WORK_POSTS, summaryWorkPosts };
}

// API ACTIONS
function getSummaryWorkPosts(region, limit, order, inDescOrder) {
  return dispatch => {
    fetch(`/posts/posts-by-filters/?reg=${region}&cat=work&limit=${limit}&order=${order}&in-desc-order=${inDescOrder}`)
      .then(response => response.json())
      .then(json => dispatch(setSummaryWorkPosts(json)))
      .catch(err => console.log(err));
  };
}

// INITIAL STATE
const initialState = {};

// REDUCER
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUMMARY_WORK_POSTS:
      return applySetSummaryWorkPosts(state, action);
    default:
      return state;
  }
}

// REDUCER FUNCTIONS
function applySetSummaryWorkPosts(state, action) {
  const { summaryWorkPosts } = action;
  return { ...state, summaryWorkPosts };
}

// EXPORT
const actionCreators = {
  getSummaryWorkPosts,
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
