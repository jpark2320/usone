// IMPORTS

// ACTIONS
const SET_SUMMARY_WORK_POSTS = "SET_SUMMARY_WORK_POSTS";
const SET_SUMMARY_VISA_POSTS = "SET_SUMMARY_VISA_POSTS";
const SET_SUMMARY_RENT_POSTS = "SET_SUMMARY_RENT_POSTS";
const SET_SUMMARY_QANDA_POSTS = "SET_SUMMARY_QANDA_POSTS";

// ACTION CREATORS
function setSummaryWorkPosts(summaryWorkPosts) {
  return { type: SET_SUMMARY_WORK_POSTS, summaryWorkPosts };
}
function setSummaryVisaPosts(summaryVisaPosts) {
  return { type: SET_SUMMARY_VISA_POSTS, summaryVisaPosts };
}
function setSummaryRentPosts(summaryRentPosts) {
  return { type: SET_SUMMARY_RENT_POSTS, summaryRentPosts };
}
function setSummaryQandaPosts(summaryQandaPosts) {
  return { type: SET_SUMMARY_QANDA_POSTS, summaryQandaPosts };
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
function getSummaryVisaPosts(region, limit, order, inDescOrder) {
  return dispatch => {
    fetch(`/posts/posts-by-filters/?reg=${region}&cat=visa&limit=${limit}&order=${order}&in-desc-order=${inDescOrder}`)
      .then(response => response.json())
      .then(json => dispatch(setSummaryVisaPosts(json)))
      .catch(err => console.log(err));
  };
}
function getSummaryRentPosts(region, limit, order, inDescOrder) {
  return dispatch => {
    fetch(`/posts/posts-by-filters/?reg=${region}&cat=rent&limit=${limit}&order=${order}&in-desc-order=${inDescOrder}`)
      .then(response => response.json())
      .then(json => dispatch(setSummaryRentPosts(json)))
      .catch(err => console.log(err));
  };
}
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
    case SET_SUMMARY_WORK_POSTS:
      return applySetSummaryWorkPosts(state, action);
    case SET_SUMMARY_VISA_POSTS:
      return applySetSummaryVisaPosts(state, action);
    case SET_SUMMARY_RENT_POSTS:
      return applySetSummaryRentPosts(state, action);
    case SET_SUMMARY_QANDA_POSTS:
      return applySetSummaryQandaPosts(state, action);
    default:
      return state;
  }
}

// REDUCER FUNCTIONS
function applySetSummaryWorkPosts(state, action) {
  const { summaryWorkPosts } = action;
  return { ...state, summaryWorkPosts };
}
function applySetSummaryVisaPosts(state, action) {
  const { summaryVisaPosts } = action;
  return { ...state, summaryVisaPosts };
}
function applySetSummaryRentPosts(state, action) {
  const { summaryRentPosts } = action;
  return { ...state, summaryRentPosts };
}
function applySetSummaryQandaPosts(state, action) {
  const { summaryQandaPosts } = action;
  return { ...state, summaryQandaPosts };
}
// EXPORT
const actionCreators = {
  getSummaryWorkPosts,
  getSummaryVisaPosts,
  getSummaryRentPosts,
  getSummaryQandaPosts
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
