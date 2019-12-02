import React from 'react'

export default function TextInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} className="form-control" onChange={props.handleChange} id={props.id} name={props.id} placeholder={props.placeholder} value={props.value} />
    </div>
  )
}