import React, { useEffect, useState } from 'react';
import { AUTH_TOKEN } from '../utils/constants';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4',
  });

  const handleSubmit = () => {
    axiosWithAuth()
      .post('http://localhost:5000/api/login', {
        username: form.username,
        password: form.password,
      })
      .then(function ({ data }) {
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
  }, [history]);

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
