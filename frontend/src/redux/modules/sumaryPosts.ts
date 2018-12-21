// IMPORTS
import { combineReducers } from "redux";

// ACTIONS
const SELECT_SUMMARY_POSTS = "SELECT_SUMMARY_POSTS"
const INVALIDATE_SUMMARY_POSTS = "INVALIDATE_SUMMARY_POSTS"
const REQUEST_SUMMARY_POSTS = "REQUEST_SUMMARY_POSTS"
const RECEIVE_SUMMARY_POSTS = "RECEIVE_SUMMARY_POSTS"

// ACTION CREATORS
function selectSummaryPosts(summaryPosts) {
  return {
    type: SELECT_SUMMARY_POSTS,
    summaryPosts
  };
}

function invalidateSummaryPosts(summaryPosts) {
  return {
    type: INVALIDATE_SUMMARY_POSTS,
    summaryPosts
  };
}

function requestSummaryPosts(summaryPosts) {
  return {
    type: REQUEST_SUMMARY_POSTS,
    summaryPosts
  };
}

function receivePosts(summaryPosts, json) {
  return { 
    type: RECEIVE_SUMMARY_POSTS, 
    summaryPosts, 
    posts: json.data.children.map(child => child.data), 
    receivedAt: Date.now() };
}

// API ACTIONS
function fetchPosts(category, region, limit, order, inDescOrder) {
  return dispatch => {
    fetch(
      `/posts/posts-by-filters/?reg=${region}&cat=qanda&limit=${limit}&order=${order}&in-desc-order=${inDescOrder}`
    )
      .then(response => response.json())
      .then(json => dispatch(receivePosts(category, json)))
      .catch(err => console.log(err));
  };
}

// INITIAL STATE

// REDUCER
function selectedSummaryPosts(state = "reactjs", action) {
  switch (action.type) {
    case SELECT_SUMMARY_POSTS:
      return action.summaryPosts;
    default:
      return state;
  }
}
function postsBySummaryPosts(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUMMARY_POSTS:
    case RECEIVE_SUMMARY_POSTS:
    case REQUEST_SUMMARY_POSTS:
      return Object.assign({}, state, {
        [action.summaryPosts]: posts(state[action.summaryPosts], action)
      });
    default:
      return state;
  }
}

// REDUCER FUNCTIONS
function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_SUMMARY_POSTS:
      return Object.assign({}, state, { 
        didInvalidate: true 
      });
    case REQUEST_SUMMARY_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_SUMMARY_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

// EXPORT
const actionCreators = {
  selectSummaryPosts,
  invalidateSummaryPosts,
  requestSummaryPosts,
  receivePosts
};

const summaryPostsReducer = combineReducers({
  postsBySummaryPosts,
  selectedSummaryPosts
});


export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default summaryPostsReducer;
