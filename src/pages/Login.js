import axios from 'axios'
import React, { useState } from 'react'

export default function Login() {
  const getUser = localStorage.getItem('user')
  if (getUser) {
    window.location.href = '/'
  }
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('https://dummyjson.com/auth/login', {
      username: username,
      password: password
    }).then(res => {
      console.log(res)
      console.log(res.data)
      localStorage.setItem('user', JSON.stringify(res.data))
      window.location.href = '/'
    }).catch(err => {
      console.log(err)
    })
  }



  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submitHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              className="form-control mt-1"
              value={username}
              placeholder="Enter username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}
