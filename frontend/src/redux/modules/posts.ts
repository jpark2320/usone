// IMPORTS
import { push } from "react-router-redux";

// ACTIONS
const SET_FILTERED_POSTS = "SET_FILTERED_POSTS";
const SET_CREATE_POST = "SET_CREATE_POST";
const SET_UPDATE_POST = "SET_UPDATE_POST";
const SET_DELETE_POST = "SET_DELETE_POST";
const SET_VIEW_POST = "SET_VIEW_POST";

// ACTION CREATORS
function setFilteredPosts(filteredPosts) {
  return { type: SET_FILTERED_POSTS, filteredPosts };
}
function setCreatePost(addedPost) {
  return { type: SET_CREATE_POST, addedPost };
}
function setUpdatePost(addedPost) {
  return { type: SET_UPDATE_POST, addedPost };
}
function setDeletePost(addedPost) {
  return { type: SET_DELETE_POST, addedPost };
}
function setViewPost(post) {
  return { type: SET_VIEW_POST, post };
}

// API ACTIONS
function getFilteredPosts(
  region,
  category,
  page_size,
  order,
  inDescOrder,
  page?
) {
  let postsQuery = `/posts/posts-by-filters/?reg=${region}&cat=${category}&page_size=${page_size}&order=${order}&in-desc-order=${inDescOrder}`;
  if (page) {
    postsQuery += `&page=${page}`;
  }
  return dispatch => {
    fetch(postsQuery)
      .then(response => response.json())
      .then(json => dispatch(setFilteredPosts(json)))
      .catch(err => console.log(err));
  };
}

function createPost(tag, title, region, location, description, category) {
  return dispatch => {
    fetch(`/posts/create-post/`, {
      body: JSON.stringify({
        tag,
        title,
        region,
        location,
        description,
        category
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(json => dispatch(setCreatePost(json)));
  };
}

function updatePost(
  id: number,
  title: string,
  description: string,
  region?,
  location?,
  tag?,
  category?
) {
  return dispatch => {
    fetch(id + `/update-post/`, {
      body: JSON.stringify({
        id,
        tag,
        title,
        region,
        location,
        description,
        category
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(json => dispatch(setUpdatePost(json)));
  };
}

function deletePost(id: number) {
  return dispatch => {
    fetch(id + `/delete-post/`, {
      body: JSON.stringify({
        id
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "delete"
    })
      .then(response => {
        console.log(response.ok, response.status);
        dispatch(push("/"));
      })
      .then(json => dispatch(setDeletePost(json)));
  };
}

function getViewPost(id) {
  return dispatch => {
    fetch(`/posts/post/${id}`)
      .then(response => response.json())
      .then(json => dispatch(setViewPost(json)))
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
    case SET_CREATE_POST:
      return applyCreatePost(state, action);
    case SET_UPDATE_POST:
      return applyUpdatePost(state, action);
    case SET_DELETE_POST:
      return applyDeletePost(state, action);
    case SET_VIEW_POST:
      return applyViewPost(state, action);
    default:
      return state;
  }
}

// REDUCER FUNCTIONS
function applySetFilteredPosts(state, action) {
  const { filteredPosts } = action;
  return { ...state, filteredPosts };
}
function applyCreatePost(state, action) {
  const { addedPost } = action;
  return { ...state, addedPost };
}
function applyUpdatePost(state, action) {
  const { updatedPost } = action;
  return { ...state, updatedPost };
}
function applyDeletePost(state, action) {
  const { deletedPost } = action;
  return { ...state, deletedPost };
}
function applyViewPost(state, action) {
  const { post } = action;
  return { ...state, post };
}

// EXPORT
const actionCreators = {
  getFilteredPosts,
  createPost,
  updatePost,
  deletePost,
  getViewPost
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
