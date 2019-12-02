import React, { useState } from 'react';
import Master from '../../layout/master';

import LoginForm from './loginForm';
import DbContext from '../../services/dbContext'

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  async function addUserToDb(user) {
    const db = await DbContext();
    
    await db.clear('Users');

    user.lastLogin = Date.now();
    db.add('Users', user);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch('http://localhost:7071/api/login', {
      method: 'POST',
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(json => addUserToDb(json))
    .catch(err => console.error(err));
  }

  function handleChange(e) {
    const { value, name } = e.target

    setUser({ ...user, ...{ [name]: value } });
  }

  return (
    <Master>
      <h1>Login</h1>

      <LoginForm handleSubmit={handleSubmit} user={user} handleChange={handleChange} />
    </Master>
  )
}