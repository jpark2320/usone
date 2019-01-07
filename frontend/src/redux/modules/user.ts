// Imports
import { push } from "react-router-redux";

// Actions
const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const SET_REGION = "SET_REGION"
const GET_REGION = "GET_REGION";

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

function setRegion() {
  return {
    type: SET_REGION
  }
}

function getRegion() {
  return {
    type: GET_REGION
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

function getUserRegion(region, password1, password2) {
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

function setUserRegion(region) {
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
  token: localStorage.getItem("jwt"),
  region: "georgia"
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    case SET_REGION:
      return applySetRegion(state, action);
    case GET_REGION:
      return applyGetRegion(state, action);
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

function applySetRegion(state, action) {
  localStorage.removeItem("jwt");
  return {
    isLoggedIn: false
  };
}

function applyGetRegion(state, action) {
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
  usernameLogin,
  getUserRegion,
  setUserRegion
};

export { actionCreators };

// Reducer Exports
export default reducer;
