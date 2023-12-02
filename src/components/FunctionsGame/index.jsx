export const changePlayer = (player1Score, player2Score, currentPlayer) => {
  let newPlayer = '';
  if (player1Score < player2Score) {
    newPlayer = 'player1';
    return newPlayer;
  } else if (player2Score < player1Score) {
    newPlayer = 'player2';
    return newPlayer;
  } else {
    return currentPlayer;
  }
};
