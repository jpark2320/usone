// IMPORTS

// ACTIONS
const SET_SUMMARY_QANDA_POSTS = "SET_SUMMARY_QANDA_POSTS";

// ACTION CREATORS
function setSummaryQandaPosts(summaryQandaPosts) {
  return { type: SET_SUMMARY_QANDA_POSTS, summaryQandaPosts };
}

// API ACTIONS
function getSummaryQandaPosts(region, limit, order, inDescOrder) {
  return dispatch => {
    fetch(`/posts/posts-by-filters/?reg=${region}&cat=qanda&limit=${limit}&order=${order}&in-desc-order=${inDescOrder}`)
      .then(response => response.json())
      .then(json => dispatch(setSummaryQandaPosts(json)))
      .catch(err => console.log(err));
  };
}

// INITIAL STATE
const initialState = {};

// REDUCER
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUMMARY_QANDA_POSTS:
      return applySetSummaryQandaPosts(state, action);
    default:
      return state;
  }
}

// REDUCER FUNCTIONS

function applySetSummaryQandaPosts(state, action) {
  const { summaryQandaPosts } = action;
  return { ...state, summaryQandaPosts };
}
// EXPORT
const actionCreators = {
  getSummaryQandaPosts
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
