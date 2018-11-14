// Imports

// Actions

// Action creators

// Initial state

const initialState = {
  isLoggedIn: localStorage.getItem("token") || false
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// reducer functions

// exports

// reducer export

export default reducer;
