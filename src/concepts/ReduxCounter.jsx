import { useSelector, useDispatch, connect } from 'react-redux'
import { Component } from 'react'

import { counterActions } from '../store/counter'

function ReduxCounter() {
  // gives access to a slice of data from the redux store
  // also subscribes the component to the redux store
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)

  // useDispatch returns us a function to dispatch actions to the redux store reducer function
  const dispatch = useDispatch()

  function counterIncrementHandler() {
    // dispatch({type: 'INCREMENT'})
    dispatch(counterActions.increment())
  }

  function counterDecrementHandler() {
    // dispatch({type: 'DECREMENT'})
    dispatch(counterActions.decrement())
  }

  function counterIncrementBy5Handler () {
    // dispatch({type: 'INCREMENT_BY_5', value: 5})
    dispatch(counterActions.incrementBy5(5))
  }

  function toggleCounterHandler () {
    // dispatch({type: 'TOGGLE_COUNTER_VISIBILITY'})
    dispatch(counterActions.toggleCounterVisibility())
  }

  return (
    <>
      {showCounter && <div>{counter}</div>}
      <div>
        <button onClick={counterIncrementHandler}>Increment</button>
        <button onClick={counterIncrementBy5Handler}>Increment By 5</button>
        <button onClick={counterDecrementHandler}>Decrement</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </>
  )
}

export default ReduxCounter


// class ReduxCounter extends Component {
//   counterIncrementHandler() {
//     this.props.increment()
//   }

//   counterDecrementHandler() {
//     this.props.decrement()
//   }

//   render() {
//     return (
//       <>
//         <div>{this.props.counter}</div>
//         <div>
//           <button onClick={this.counterIncrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.counterDecrementHandler.bind(this)}>Decrement</button>
//         </div>
//       </>
//     )
//   }
// }

// // maps the redux store state with the class component's props
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// // maps the actions of the redux store to the component's props
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'INCREMENT'}),
//     decrement: () => dispatch({type: 'DECREMENT'}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter)