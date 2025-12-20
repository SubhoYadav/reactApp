import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/auth'

function ReduxAuth() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const loginFormSubmitHandler = (event) => {
    event.preventDefault()

    dispatch(authActions.login())
  }

  function logoutHandler () {
    dispatch(authActions.logout())
  }

  return (
    <div style={{ margin: '10px' }}>
      {!isAuthenticated ? 
        <form onSubmit={loginFormSubmitHandler}>
          <label htmlFor="user_name">User Name:</label>
          <input type="text" id='user_name' name='user_name'  />

          <label htmlFor="password">Password:</label>
          <input type="text" id='password' name='password'  />

          <button type='submit'>Login</button>
        </form> :

        <div>
          <strong>The user is authenticated!</strong>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      }
    </div>
  )
}

export default ReduxAuth