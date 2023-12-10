import { changePlayer } from '../FunctionsGame';
import { whoIsWinner } from './winner';

export const WantPatch = (state) => {
  // vybrat aktuálního hráče
  const currentPlayer =
    state.currentPlayer === 'player1' ? state.player1 : state.player2;

  // vzít si látku - aktuální (ID máme vybrané)
  const newSelectedPatch = state.patchesMixed.find(
    (x) => x.id === state.selectedPatchId,
  );

  //aktuálního hráče si vezmeme jeho pole a do něj vložíme tu látku
  const newCurrentPlayerArray = [...currentPlayer.arrayPatch, newSelectedPatch];

  // odečtení volných pozic na desce hráče
  let newHoles = currentPlayer.holes;
  let i, j;
  const buyPatchHeight = newSelectedPatch.filled.length;
  const buyPatchWidth = newSelectedPatch.filled[0].length;
  for (i = 0; i < buyPatchHeight; i++) {
    for (j = 0; j < buyPatchWidth; j++) {
      if (newSelectedPatch.filled[i][j] > 0) {
        newHoles = newHoles - 1;
      }
    }
  }

  // přidání pozice látky na deku hráče
  const newPatchesPosition = [
    ...currentPlayer.patchesPosition,
    {
      x: state.selectedPatchPosition.x,
      y: state.selectedPatchPosition.y,
      rotation: state.selectedPatchRotation,
      flip: state.selectedPatchFlip,
    },
  ];

  // odebrat látku z pole záplat
  const indexOfselectedPatch = state.patchesMixed.findIndex(
    (x) => x.id === state.selectedPatchId,
  );

  //posunutí nepoužitých látek v elipse na konec
  const newPatchesMixed = [
    ...state.patchesMixed.slice(indexOfselectedPatch + 1),
    ...state.patchesMixed.slice(0, indexOfselectedPatch),
  ];

  // odečíst příslušný počet knoflíků
  let newCurrentPlayerButtons = currentPlayer.buttons - newSelectedPatch.price;

  // posunout skóre a přičíst knoflíky
  let newScore =
    currentPlayer.score + newSelectedPatch.time > 59
      ? 60
      : currentPlayer.score + newSelectedPatch.time;
  const newIncome = currentPlayer.income + newSelectedPatch.income;

  let forScoreStart = currentPlayer.score;
  const forScoreEnd = newScore;

  for (forScoreStart; forScoreStart <= forScoreEnd; forScoreStart++) {
    if (state.timeArray[forScoreStart].button) {
      newCurrentPlayerButtons = newCurrentPlayerButtons + currentPlayer.income;
    }
  }

  let newState = {
    ...state,
    buttonBuy: false,
    selectedPatchRotation: 0,
    selectedPatchFlip: 0,
    [state.currentPlayer]: {
      ...state[state.currentPlayer],
      arrayPatch: newCurrentPlayerArray,
      buttons: newCurrentPlayerButtons,
      income: newIncome,
      score: newScore,
      holes: newHoles,
      patchesPosition: newPatchesPosition,
    },
    patchesMixed: newPatchesMixed, // vrácení látky do elipsy,
  };

  newState = whoIsWinner(newState);

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
