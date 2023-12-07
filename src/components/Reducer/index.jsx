import { PatchesData } from '../PatchesData';
import { timeArray } from './../FunctionsGame';
import { OnDragEnd } from './onDragEnd';
import { SkipTurn } from './skipTurn';
import { WantPatch } from './wantPatch';
import { RotationMinus90 } from './rotationMinus90';
import { RotationPlus90 } from './rotationPlus90';
import { RotationFlip } from './rotationFlip';
import { RotationReset } from './rotationReset';

export const reducer = (state, action) => {
  if (action.type === 'NEW_GAME') {
    return { defaultState };
  }

  // responzivní design
  if (action.type === 'WINDOW_SIZE') {
    return {
      ...state,
      x: action.windowWidth / 2 - 57,
      y: action.windowHeight / 4.4,
      points: distributePointsOnEllipse(
        action.windowWidth / 2.4,
        action.windowHeight / 4,
        33,
      ),
      player1: {
        ...state.player1,
        gameBoard: {
          width: 315,
          left: 50,
          top: action.windowHeight - 315 - 270,
        },
      },
      player2: {
        ...state.player2,
        gameBoard: {
          width: 315,
          left: action.windowWidth - 315 - 50,
          top: action.windowHeight - 315 - 270,
        },
      },
    };
    // Ovál parametry:/*
    // x: 1800 / 2, // pozice zleva, šířka okna / 2 (střed okna)
    // y: 170, // pozice ze shora
    /*
    player1: {
      gameBoard: { width: 315, left: 50, top: 550 },
    },
    player2: {
      gameBoard: { width: 315, left: 1550, top: 550 },
    },
    timeArray: [...timeArray(37.2, 3.5)],
    box_weight: 37.2, // šířka/délka časovače
    edge: 3.5, //okraj od políčka časovače
    playerFieldSize: 35,
  
    // Ovál parametry:
    x: 1800 / 2, // pozice zleva, šířka okna / 2 (střed okna)
    y: 170, // pozice ze shora
    numPoints: 33,
  
    points: distributePointsOnEllipse(*/
    //1800 / 2.5,
    // 250,
    ///*numPoints*/ 33,
    /*), // vytvoření pozic na oválu
    patchesMixed: mixingPatches(),*/
  }

  // pohyb látky
  if (action.type === 'ON_DRAG_END') {
    return OnDragEnd(state, action);
  }

  // nechci hrát

  if (action.type === 'SKIP_TURN') {
    return SkipTurn(state, action);
  }

  if (action.type === 'WANT_PATCH') {
    return WantPatch(state);
  }

  if (action.type === 'ROTATION_MINUS_90') {
    return RotationMinus90(state);
  }

  if (action.type === 'ROTATION_PLUS_90') {
    return RotationPlus90(state);
  }

  if (action.type === 'ROTATION_FLIP') {
    return RotationFlip(state);
  }

  if (action.type === 'ROTATION_RESET') {
    return RotationReset(state);
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
    holes: 81,
    arrayPatch: [],
    patchesPosition: [], // pozice látek na dece
    gameBoard: { width: 315, left: 50, top: 550 },
  },
  player2: {
    buttons: 5,
    income: 0,
    score: 2,
    holes: 81,
    arrayPatch: [],
    patchesPosition: [], // pozice látek na dece
    gameBoard: { width: 315, left: 1550, top: 550 },
  },
  scoreButton: false,
  scorePatch: false,
  selectedPatchId: null,
  selectedPatchPosition: { x: 0, y: 0 },
  selectedPatchRotation: 0,
  selectedPatchFlip: 0,
<<<<<<< HEAD
  timeArray: [...timeArray(37.2, 3.5)],
  box_weight: 37.2, // šířka/délka časovače
  edge: 3.5, //okraj od políčka časovače
  playerFieldSize: 35,
=======
>>>>>>> 0b0389bc10ae04555228f5ce673935d69246ec07

  timeArray: [...timeArray(37, 3.5)],
  sizeBoxTimmer: 37, // šířka/délka časovače
  // box_weight: 37.2,
  edgeTimmer: 3.5, //okraj od políčka časovače
  playerFieldSize: 35, // šířka desky hráče
  windowWeight: 30, // šířka okna
  sizeBoxPatch: 30,
  
  // Ovál parametry:

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
