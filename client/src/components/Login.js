import React, { useState } from "react"
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    const [form, setForm] = useState({
      username:'',
      password: ''
    })

    const handleSubmit = () =>{
      axiosWithAuth().post('/api/login', form)
        .then(res => {
          localStorage.setItem('token', res.data.payload)
          setForm({username:'', password: ''})
          props.history.push('/bubbles')
        })
        .catch(err => console.log(err))
    }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()

      }}>
        <input 
          name='username'
          placeholder='User Name'
          value={form.username}
          onChange={(e) => {
            setForm({...form, [e.target.name]: e.target.value})
          }}
        />
        <input 
          name='password'
          type='password'
          placeholder='Password'
          value={form.password}
          onChange={(e) => {
            setForm({...form, [e.target.name]: e.target.value})
          }}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login