// IMPORTS

// ACTIONS
const SET_FILTERED_POSTS = "SET_FILTERED_POSTS";
const SET_CREATE_POST = "SET_CREATE_POST";
const SET_VIEW_POST = "SET_VIEW_POST";

// ACTION CREATORS
function setFilteredPosts(filteredPosts) {
  return { type: SET_FILTERED_POSTS, filteredPosts };
}
function setCreatePost(addedPost) {
  return { type: SET_CREATE_POST, addedPost };
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

function getViewPost(id) {
  return dispatch => {
    fetch(
      `/posts/post/${id}`
    )
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
function applyViewPost(state, action) {
  const { post } = action;
  return { post };
}

// EXPORT
const actionCreators = {
  getFilteredPosts,
  createPost,
  getViewPost
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
