import { changePlayer } from '../FunctionsGame';

export const WantPatch = (state) => {
  // vybrat aktuálního hráče
  const currentPlayer =
    state.currentPlayer === 'player1' ? state.player1 : state.player2;

  // vzít si látku - aktuální (ID máme vybrané)
  const newSelectedPatch = state.patchesMixed.find(
    (x) => x.id === state.selectedPatchId,
  );

  //aktuálního hráče si vezmeme jeho pole a do něj vložíme tu záplatu
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

  // odebrat záplatu z pole záplat
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
  let newScore = currentPlayer.score + newSelectedPatch.time;
  const newIncome = currentPlayer.income + newSelectedPatch.income;

  let forScoreStart = currentPlayer.score;
  const forScoreEnd = newScore;

  for (forScoreStart; forScoreStart <= forScoreEnd; forScoreStart++) {
    if (state.timeArray[forScoreStart].button) {
      newCurrentPlayerButtons = newCurrentPlayerButtons + currentPlayer.income;
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
