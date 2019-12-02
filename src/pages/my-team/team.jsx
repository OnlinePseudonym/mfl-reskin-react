import React from 'react';

import Player from './player';

export default function Team(props) {
  var players = props.roster.map(player => {
    var name = `${player.name.split(',')[1]} ${player.name.split(',')[0]}`;

    return (
      <Player key={player.id} name={name} position={player.position} team={player.team} status={player.status} id={player.id} />
    )
  })

  return (
    <div className="team">
      {players}
    </div>
  )
}