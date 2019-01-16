// Imports
import { push } from "connected-react-router";

// Actions
const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";

// Action Creators (used to change Redux state)
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

// API actions
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

// Initial State
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt")
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    default:
      return state;
  }
}

// Reducer Functions
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

// Exports
const actionCreators = {
  createAccount,
  facebookLogin,
  logout,
  usernameLogin
};

export { actionCreators };

// Reducer Exports
export default reducer;
