import { changePlayer } from '../FunctionsGame';
import { defaultState } from '.';
import { whoIsWinner } from './whoIsWinner';

export const SkipTurn = (state) => {
  const currentPlayer =
    state.currentPlayer === 'player1' ? state.player1 : state.player2;
  const otherPlayer =
    state.currentPlayer === 'player1' ? state.player2 : state.player1;

  let newScore = null;
  let newAddButtons = null;
  let forScoreStart = currentPlayer.score;

  //přeskočení druhého hráče
  newScore = otherPlayer.score + 1;
  const forScoreEnd = newScore; //opravit podle látek, až je budeme mít

  //přičtení knoflíků;
  newAddButtons =
    currentPlayer.buttons + (otherPlayer.score - currentPlayer.score + 1);

  // prošel jsem přes knoflík?
  for (forScoreStart; forScoreStart <= forScoreEnd; forScoreStart++) {
    if (state.timeArray[forScoreStart].button) {
      newAddButtons = newAddButtons + currentPlayer.income;
    }
  }

  whoIsWinner(state);

  const newState = {
    ...state,
    [state.currentPlayer]: {
      ...state[state.currentPlayer],
      score: newScore,
      buttons: newAddButtons,
    },
    // vrácení látky do elipsy
    selectedPatchId: defaultState.selectedPatchId,
  };
  //určení hráče na tahu
  const whoIsCurrentPlayer = changePlayer(
    newState.player1.score,
    newState.player2.score,
    newState.currentPlayer,
  );

  const newStateCurrentPlayer = {
    ...newState,
    currentPlayer: whoIsCurrentPlayer,
  };

  return newStateCurrentPlayer;
};
