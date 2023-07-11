import React from 'react';
import GameBoard from './GameBoard';

export default function Yahtzee({currentUsers, userActivity}) {
  console.log(currentUsers)
  return (
    <GameBoard currentUsers={currentUsers} userActivity={userActivity}/>
  );
}

