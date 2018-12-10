// IMPORTS

// ACTIONS
const SET_SUMMARY_VISA_POSTS = "SET_SUMMARY_VISA_POSTS";

// ACTION CREATORS
function setSummaryVisaPosts(summaryVisaPosts) {
  return { type: SET_SUMMARY_VISA_POSTS, summaryVisaPosts };
}

// API ACTIONS
function getSummaryVisaPosts(region, limit, order, inDescOrder) {
  return dispatch => {
    fetch(`/posts/posts-by-filters/?reg=${region}&cat=visa&limit=${limit}&order=${order}&in-desc-order=${inDescOrder}`)
      .then(response => response.json())
      .then(json => dispatch(setSummaryVisaPosts(json)))
      .catch(err => console.log(err));
  };
}

// INITIAL STATE
const initialState = {};

// REDUCER
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUMMARY_VISA_POSTS:
      return applySetSummaryVisaPosts(state, action);
    default:
      return state;
  }
}

// REDUCER FUNCTIONS
function applySetSummaryVisaPosts(state, action) {
  const { summaryVisaPosts } = action;
  return { ...state, summaryVisaPosts };
}

// EXPORT
const actionCreators = {
  getSummaryVisaPosts
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
