import React from 'react'

import TextInput from '../../components/fieldtypes/textInput'

export default function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput id='username' type='text' placeholder='Enter username...' label='Username' value={props.user.username} handleChange={props.handleChange} />
      <TextInput id='password' type='password' placeholder='Enter password...' label='Password' value={props.user.password} handleChange={props.handleChange} />
      <button type="submit" className='btn btn-primary'>Submit</button>
    </form>
  )
}