import { createStore } from "redux";

// using redux toolkit
// rtk uses immer js package, that will clone the state if its mutated
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter'
import authReducer from './auth'


// action creator method that returns { type: 'SOME_UNIQUE_IDENTIFIER' }
// counterSlice.actions.increment()

// counterSlice.actions.incrementBy5(5) 
// returns { type: 'SOME_UNIQUE_IDENTIFIER', payload: 5 }

// Never ever mutate the existing state of redux store, always return a new state
// existing states are immutable
// const counterReducer = (state = initialState, action) => {
//   if (action.type == 'INCREMENT') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     }
//   }

//   else if (action.type == 'INCREMENT_BY_5') {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter
//     }  
//   }

//   else if (action.type == 'DECREMENT') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     }
//   }

//   else if (action.type ==  'TOGGLE_COUNTER_VISIBILITY') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter
//     }
//   }
//   return state
// }

// const store = createStore(counterReducer)
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})

export default store


