import { changePlayer } from "../FunctionsGame";
import { defaultState } from ".";

export const SkipTurn = (state, action) => {
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

  //hodnota score nesmí přesáhnout 63, resp. 62
  if (newScore > 59) {
    newScore = 60;
  }

  // kdo je výtěz?
  let whoisWinner = '';
  if (
    state.player1.buttons - state.player1.holes * 2 >
    state.player2.buttons - state.player2.holes * 2
  ) {
    whoisWinner = 'Vyhrál hráč 1';
  } else if (
    state.player2.buttons - state.player2.holes * 2 >
    state.player1.buttons - state.player1.holes * 2
  ) {
    whoisWinner = 'Vyhrál hráč 2';
  } else {
    ('Vyhráli jste oba, je to remíza.');
  }

  // je konec hry? Pokud ano, vyhodnoť to
  if (state.player1.score >= 59 && state.player2.score >= 59) {
    // Zpoždění alertu o 2000 milisekund (2 sekundy)
    setTimeout(() => {
      alert(`HRA SKONČILA. ${whoisWinner}`);
    }, 500);
  }

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
