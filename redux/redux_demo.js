const redux = require('redux');

/*
  Reducer functions should be pure functions, takes the old state and the actions, produces a new state object
  Reducers should not trigger any side-effects like HTTP req, reading/updating the LS
  Pure functions: Functions that produce same output for the same pair of inputs
*/
const counterReducer = (oldState = { counter: 0 }, dispatchedAction) => {
  if (dispatchedAction.type == 'INCREMENT') {
    return {
      counter: oldState.counter + 1
    }
  }

  else if (dispatchedAction.type == 'DECREMENT') {
    return {
      counter: oldState.counter - 1
    }
  }

  return oldState;
}

// The reducer is called at the time of creation of the state with a default action, so that it can get the initial state
const store = redux.createStore(counterReducer)

// get the initial state
console.log("Initial state: ", store.getState())

function counterSubscriber() {
  const latestState = store.getState();
  console.log("Latest state: ", latestState)
}

// make the store aware of the existence of this subscriber, so that it can execute this function, whenever the data changes in the store
store.subscribe(counterSubscriber)

// dispatching an action
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
