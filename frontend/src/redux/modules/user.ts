// IMPORTS
import { push } from "connected-react-router";

// ACTIONS
const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const SET_USER_REGION = "SET_USER_REGION";
const GET_USER_REGION = "GET_USER_REGION";

// ACTION CREATORS
function saveToken(token) {
  return {
    token,
    type: SAVE_TOKEN
  };
}
function logoutToken() {
  return {
    type: LOGOUT
  };
}
function setUserRegion(region) {
  return {
    type: SET_USER_REGION,
    region
  };
}
function getUserRegion() {
  return {
    type: GET_USER_REGION
  };
}

// API ACTIONS
function logout() {
  return dispatch => {
    fetch("/rest-auth/logout/", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(() => {
        dispatch(logoutToken());
        dispatch(push("/login"));
      })
      .catch(err => console.log(err));
  };
}
function facebookLogin(accessToken) {
  return dispatch => {
    fetch("/accounts/login/facebook/", {
      body: JSON.stringify({
        accessToken
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
          dispatch(push("/"));
        }
      })
      .catch(err => console.log(err));
  };
}
function usernameLogin(username, password) {
  return dispatch => {
    fetch("/rest-auth/login/", {
      body: JSON.stringify({
        password,
        username
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
          dispatch(push("/"));
        }
      })
      .catch(err => console.log(err));
  };
}
function createAccount(username, password1, password2) {
  return dispatch => {
    fetch("/rest-auth/registration/", {
      body: JSON.stringify({
        password1,
        password2,
        username
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(json => {
        if (password1 === password2 && json.token) {
          dispatch(saveToken(json.token));
          dispatch(push("/"));
        }
      })
      .catch(err => console.log(err));
  };
}
function sendPasswordResetEmail(email) {
  return dispatch => {
    fetch("/rest-auth/password/reset/", {
      body: JSON.stringify({
        email
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(json => {
        dispatch(saveToken(json.token));
        dispatch(push("/password-reset-confirm"));
      })
      .catch(err => console.log(err));
  };
}
function onChangeUserRegion(region) {
  return dispatch => {
    dispatch(setUserRegion(region));
  };
}
function getRegion() {
  return dispatch => {
    dispatch(getUserRegion());
  };
}

// INITIAL STATE
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt"),
  region: "georgia"
};

// REDUCER
function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    case SET_USER_REGION:
      return applySetUserRegion(state, action);
    case GET_USER_REGION:
      const region = state.region;
      return { ...state, region };
    default:
      return state;
  }
}

// REDUCER FUNCTIONS
function applySetToken(state, action) {
  const { token } = action;
  localStorage.setItem("jwt", token);
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

function applyLogout(state, action) {
  localStorage.removeItem("jwt");
  return {
    isLoggedIn: false
  };
}

function applySetUserRegion(state, action) {
  const region = action.region;
  return { ...state, region };
}

// EXPORT
const actionCreators = {
  createAccount,
  facebookLogin,
  logout,
  usernameLogin,
  sendPasswordResetEmail,
  onChangeUserRegion,
  getRegion
};
export { actionCreators };

// DEFAULT REDUCER EXPORTS
export default reducer;
