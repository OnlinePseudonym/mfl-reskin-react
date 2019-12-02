import { openDB, deleteDb, wrap, unwrap } from 'idb';

export default async function dbContext() {
  const db = await openDB('MFL', 1, {
    upgrade(db) {
      const users = db.createObjectStore('Users', {
        keyPath: 'userId',
        autoIncrement: false
      });

      const leauges = db.createObjectStore('Leagues', {
        keyPath: 'leagueId',
        autoIncrement: false
      })

      const players = db.createObjectStore('Players', {
        keyPath: 'id',
        autoIncrement: false,
      })

      players.createIndex('name', 'name');
      players.createIndex('team', 'team');
      players.createIndex('position', 'position');
    }
  });

  return db;
}

export async function updatePlayers(players) {
  const db = await dbContext();
  
  players.forEach(player => db.put("Players", player))

  await db.done
}