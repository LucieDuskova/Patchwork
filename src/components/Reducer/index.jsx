import { PatchesData } from '../PatchesData';
import { changePlayer, timeArray } from './../FunctionsGame';
import { GameArrayTime } from './../GameArrayTime';

export const reducer = (state, action) => {
  if (action.type === 'NEW_GAME') {
    return { defaultState };
  }

  if (action.type === 'ON_DRAG_END') {
    const newSelectedPatchId = action.patchId;
    const newSelectedPatchPosition = {
      x: action.patchX + action.patchInfo.offset.x,
      y: action.patchY + action.patchInfo.offset.y,
    };

    //podívat se, zda je vybraná látka v poli aktivního hráče
    const currentPlayer =
      state.currentPlayer === 'player1' ? state.player1 : state.player2;

    const selectedPatch = state.patchesMixed.find(
      (x) => x.id === newSelectedPatchId,
    );

    const AreacurrentPlayerX = currentPlayer.gameBoard.left;
    const AreacurrentPlayerY = currentPlayer.gameBoard.top;
    const AreacurrentPlayerWidth = currentPlayer.gameBoard.width;
    const SelectedPatchPositionWidthX =
      newSelectedPatchPosition.x +
      selectedPatch.viewBox.split(' ').map(Number)[2] * 7;
    const SelectedPatchPositionWidthY =
      newSelectedPatchPosition.y +
      selectedPatch.viewBox.split(' ').map(Number)[3] * 7;
    let newButtonBuy = false;

    //podmínka, zde je vybraná látka v poli aktivního hráče
    if (
      newSelectedPatchPosition.x > AreacurrentPlayerX &&
      newSelectedPatchPosition.y > AreacurrentPlayerY &&
      SelectedPatchPositionWidthX <
        AreacurrentPlayerX + AreacurrentPlayerWidth &&
      SelectedPatchPositionWidthY < AreacurrentPlayerY + AreacurrentPlayerWidth
    ) {
      newButtonBuy = true;
    }

    return {
      ...state,
      selectedPatchId: newSelectedPatchId,
      selectedPatchPosition: newSelectedPatchPosition,
      buttonBuy: newButtonBuy,
    };
  }

  // nechci hrát
  if (action.type === 'SKIP_TURN') {
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

    // console.log(state.scoreButton);
    // console.log(forScoreStart);
    // console.log(forScoreEnd);

    return newStateCurrentPlayer;
  }

  if (action.type === 'WANT_PATCH') {
    // vybrat aktuálního hráče
    const currentPlayer =
      state.currentPlayer === 'player1' ? state.player1 : state.player2;

    // vzít si látku - aktuální (ID máme vybrané)
    const newSelectedPatch = state.patchesMixed.find(
      (x) => x.id === state.selectedPatchId,
    );

    //aktuálního hráče si vezmeme jeho pole a do něj vložíme tu záplatu
    const newCurrentPlayerArray = [
      ...currentPlayer.arrayPatch,
      newSelectedPatch,
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
    let newCurrentPlayerButtons =
      currentPlayer.buttons - newSelectedPatch.price;

    // posunout skóre a přičíst knoflíky
    const newScore = currentPlayer.score + newSelectedPatch.time;
    const newIncome = currentPlayer.income + newSelectedPatch.income;

    let forScoreStart = currentPlayer.score;
    const forScoreEnd = newScore;

    for (forScoreStart; forScoreStart <= forScoreEnd; forScoreStart++) {
      if (state.timeArray[forScoreStart].button) {
        newCurrentPlayerButtons =
          newCurrentPlayerButtons + currentPlayer.income;
      }
    }

    const newState = {
      ...state,
      buttonBuy: false,
      selectedPatchRotation: 0,
      selectPatchFlip: 0,
      [state.currentPlayer]: {
        ...state[state.currentPlayer],
        arrayPatch: newCurrentPlayerArray,
        buttons: newCurrentPlayerButtons,
        income: newIncome,
        score: newScore,
      },
      // vrácení látky do elipsy
      patchesMixed: newPatchesMixed,
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
  }

  if (action.type === 'ROTATION_MINUS_90') {
    const newSelectedPatchRotation = state.selectedPatchRotation - 90;

    return {
      ...state,
      selectedPatchRotation: newSelectedPatchRotation,
    };
  }

  if (action.type === 'ROTATION_PLUS_90') {
    const newSelectedPatchRotation = state.selectedPatchRotation + 90;

    return {
      ...state,
      selectedPatchRotation: newSelectedPatchRotation,
    };
  }

  if (action.type === 'ROTATION_FLIP') {
    const newSelectedPatchFlip = state.selectedPatchFlip === 180 ? 0 : 180;

    return {
      ...state,
      selectedPatchFlip: newSelectedPatchFlip,
    };
  }

  if (action.type === 'ROTATION_RESET') {
    return {
      ...state,
      selectedPatchFlip: 0,
      selectedPatchRotation: 0,
    };
  }
  return state;
};

const distributePointsOnEllipse = (a, b, numPoints) => {
  const points = [];

  // fce na vytvoření 33 pozic pro patch
  for (let i = 0; i < numPoints; i++) {
    const theta = (2 * Math.PI * i) / numPoints;
    const x = a * Math.sin(theta);
    const y = b * Math.cos(theta);
    points.push([parseInt(x), parseInt(y)]);
  }

  const starOfEllipse = points[numPoints - 1];
  points.splice(numPoints - 1, 0);
  points.splice(0, 0, starOfEllipse);

  return points;
};

//funkce, která mi požadovaný prvek přesune na konec pole
const arraymove = (arr, fromIndex) => {
  const element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(33, 0, element);
};

const mixingPatches = () => {
  const patches = [...PatchesData]; // kopie původních PatchesData

  patches.sort(() => Math.random() - 0.5); // náhodné seřazení látek
  const indexOf0_0 = patches.findIndex((x) => x.id === '0_0'); // naleznutí indexu 0_0

  arraymove(patches, indexOf0_0); // posunutí 0_0 nakonec
  return patches;
};

export const defaultState = {
  currentPlayer: 'player1',
  player1: {
    buttons: 5,
    income: 0,
    score: 1,
    arrayPatch: [],
    gameBoard: { width: 315, left: 50, top: 550 },
  },
  player2: {
    buttons: 5,
    income: 0,
    score: 2,
    arrayPatch: [],
    gameBoard: { width: 315, left: 1550, top: 550 },
  },
  scoreButton: false,
  scorePatch: false,
  selectedPatchId: null,
  selectedPatchPosition: { x: 0, y: 0 },
  selectedPatchRotation: 0,
  selectedPatchFlip: 0,
  timeArray: [...timeArray(37.2, 3.5)],
  box_weight: 37.2, // šířka/délka časovače
  edge: 3.5, //okraj od políčka časovače
  playerFieldSide: 35,

  // Ovál parametry:
  a: 800 / 2.5, // šířka oválu šířka okna / 2,5
  b: 250, // výška oválu
  x: 1800 / 2, // pozice zleva, šířka okna / 2 (střed okna)
  y: 170, // pozice ze shora
  numPoints: 33,

  points: distributePointsOnEllipse(
    /*a*/ 1800 / 2.5,
    /*b*/ 250,
    /*numPoints*/ 33,
  ), // vytvoření pozic na oválu
  patchesMixed: mixingPatches(),

  buttonBuy: false,
};
