import { useReducer } from 'react';
import { PatchesData } from '../PatchesData';
import {changePlayer} from './../FunctionsGame'

const performGameMoveSummary = () => {};



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
    return {
      ...state,
      selectedPatchId: newSelectedPatchId,
      selectedPatchPosition: newSelectedPatchPosition,
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
    //přeskočení druhého hráče
    newScore = otherPlayer.score + 1;

    //přičtení knoflíků;
    newAddButtons =
      currentPlayer.buttons + (otherPlayer.score - currentPlayer.score + 1);

    //console.log(newAddButtons);
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
  }

  if (action.type === 'WANT_PATCH') {
    const newPlayerButtons = '';
    const newPlayerIncome = '';
    const newPlayerScore = '';
    if (state.currentPlayer.score.incldes(button)) {
      // políčko na kterém stojí + přidat všechna další políčka, přes ktreré projel
    }

    return {
      ...state,
      [state.currentPlayer]: {
        ...state[state.currentPlayer],
        income: state[state.currentPlayer].income + PatchesData.income,
      },
    };
  }

  if (action.type === 'ADD_BUTTONS') {
    return {
      ...state,
      [state.currentPlayer]: {
        ...state[state.currentPlayer],
        buttons:
          state[state.currentPlayer].buttons +
          state[state.currentPlayer].income,
      },
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

  return points;
};

//funkce, která mi požadovaný prvek přesune na konec pole
const arraymove = (arr, fromIndex) => {
  var element = arr[fromIndex];
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
  player1: { buttons: 5, income: 0, score: 1 },
  player2: { buttons: 5, income: 0, score: 2 },
  gamePlayer1: {},
  gamePlayer2: {},
  scoreButton: false,
  scorePatch: false,
  selectedPatchId: null,
  selectedPatchPosition: { x: 0, y: 0 },
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
};
