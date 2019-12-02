import React, { useEffect, useState } from 'react';
import Master from '../../layout/master';

import Team from './team';

import dbContext from '../../services/dbContext';

export default function MyTeam() {
  const [myLeagues, setLeagues] = useState([]);
  const [roster, setRoster] = useState([]);

  function handleClick(leagueId) {
    const league = myLeagues.find(league => league.leagueId === leagueId);

    setRoster(league.myRoster);
  }

  async function getRoster(league, userId) {
    console.log(league);
    const response = await fetch(`http://localhost:7071/api/GetRoster?userId=${userId}&leagueid=${league.leagueId}&franchiseid=${league.franchiseId}`)
    const leagueRoster = await response.json();

    const updatedRoster = await Promise.all(leagueRoster.map(async spot => updatePlayer(spot.id)))
    return updatedRoster;
  }

  async function updatePlayer(id) {
    const db = await dbContext();
    const player = db.get("Players", id);

    return player;
  }

  async function getLeagues (userId) {
    console.log(userId);
    const response = await fetch(`http://localhost:7071/api/GetLeagues?userId=${userId}`);
    const leagues = await response.json();

    await Promise.all(leagues.map(async (league, i) => {
      const leagueRoster = await getRoster(league, userId);
      if (i === 0) {
        setRoster(leagueRoster);
      }
      league.myRoster = leagueRoster;
    }))

    setLeagues(leagues);
  }

  useEffect(() => {
    async function getUser() {
      const db = await dbContext();
      const users = await db.getAll('Users');
      const dbLeagues = await db.getAll('Leagues');
      const user = users[0];
  
      console.log('what are you waiting for');
      if (dbLeagues.length > 0) {
        setLeagues(dbLeagues);
      }
    
      getLeagues(user.userId)
    }

    getUser();
  }, []);

  function renderTabs() {
    return myLeagues.map((league, i) => {
      return (
        <li key={league.leagueId} className="nav-item">
          <button className={ i === 0 ? "nav-link active" : "nav-link"} onClick={() => handleClick(league.leagueId)} style={ {background: "transparent"} }>{league.name}</button>
        </li>
      )
    })
  }

  return (
    <Master>
      <h1>My Team</h1>

      <ul className="nav nav-tabs">
        {renderTabs()}
      </ul>
      <Team roster={roster} />
    </Master>
  )
}