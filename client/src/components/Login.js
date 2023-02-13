import React, { useEffect, useState } from 'react';
import { AUTH_TOKEN } from '../utils/constants';
import { useHistory } from 'react-router-dom';
import { Authenticate } from '../api';

const Login = () => {
  const history = useHistory();
  // remove testing data before pushing.
  const [form, setForm] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4',
  });
  // create a service for axios.
  const handleSubmit = () => {
    //  .env file for base_url
    Authenticate(form)
      .then(function ({ data }) {
        debugger;
        localStorage.setItem(AUTH_TOKEN, data.payload);
        setForm({ username: '', password: '' });
        history.push('/bubbles');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (localStorage.getItem(AUTH_TOKEN)) history.push('/bubbles');
  }, []);

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          name="username"
          placeholder="User Name"
          value={form.username}
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
