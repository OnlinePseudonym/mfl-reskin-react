import React from 'react';

export default function Player(props) {
  return (
    <div>
      {props.name}: {props.position}, {props.team}
    </div>
  )
}