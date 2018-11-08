


const dummyData=[
    {id:1, title:'Test List Item1 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:{} },
    {id:2, title:'Test List Item2 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:{} },
    {id:3, title:'Test List Item3 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:{} },
    {id:4, title:'Test List Item4 ', description:'Fake des4',creator: {firstname:'firstname4', lastname:' lastname4'}, region:'NY',category:'Annoucement',like:1,view:4222,created_at:{} },

]

const initialState = null;



function listview_reducer(state = initialState, action:any) {
    switch (action.type) {
      default:
        return state;

      case 'TEST_LISTVIEW_REDUCER':
        return dummyData; // action.payload.
    }
  }

  


export default listview_reducer;













// import { combineReducers } from 'redux'
// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   SET_VISIBILITY_FILTER,
//   VisibilityFilters
// } from './actions'
// const { SHOW_ALL } = VisibilityFilters
// ​
// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }
// ​
// function todos(state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false
//         }
//       ]
//     case TOGGLE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           })
//         }
//         return todo
//       })
//     default:
//       return state
//   }
// }
// ​
// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })
// ​
// export default todoApp