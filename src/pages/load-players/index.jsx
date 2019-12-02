import React from 'react';
import Master from '../../layout/master';

import dbContext, { updatePlayers } from '../../services/dbContext';

export default function LoadPlayers() {

  async function HandleClick() {
    const db = await dbContext();
    const users = await db.getAll('Users');
    const userId = users[0] ? users[0].id : null;

    if (userId === null) {
      console.log('User not authenticated, please login');
      return;
    }

    var playersEndpoint = `http://localhost:7071/api/GetAllPlayers?userId=${userId}`;

    fetch(playersEndpoint)
      .then(res => res.json())
      .then(json => updatePlayers(json))    
  }

  async function getPlayers() {
    const db = await dbContext();
    const players = await db.getAll("Players");

    console.log(players);
  }

  return (
    <Master>
      <h1>Load Players</h1>
      <button type="button" onClick={HandleClick}>Load Players</button>
      <button type="button" onClick={getPlayers}>Get Players</button>
    </Master>
  )
}