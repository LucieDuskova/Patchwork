import { useReducer } from 'react';
import { Patchs } from '../Patchs';

export const reducer = (state, action) => {
  if (action.type === 'NEW_GAME') {
    return { defaultState };
  }

  if (action.type === 'CHANGE_PLAYER') {
    const newPlayer = '';
    if (state.player1.score < state.player2.score) {
      newPlayer = 'player1';
      return { ...state, currentPlayer: 'newPlayer' };
    } else if (state.player2.score < state.player1.score) {
      newPlayer = 'player2';
      return { ...state, currentPlayer: 'newPlayer' };
    }
  }

  if (action.type === 'ON_DRAG_END') {
    const newSelectedPatchId = action.patchId;
    const newSelectedPatchPosition = {
      x: action.patchInfo.point.x,
      y: action.patchInfo.point.y,
    };
    return {
      ...state,
      selectedPatchId: newSelectedPatchId,
      selectedPatchPosition: newSelectedPatchPosition,
    };
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
        income: state[state.currentPlayer].income + Patchs.income,
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

export const defaultState = {
  currentPlayer: 'player1',
  player1: { buttons: 5, income: 0, score: 3 },
  player2: { buttons: 5, income: 0, score: 3 },
  gamePlayer1: {},
  gamePlayer2: {},
  scoreButton: false,
  scorePatch: false,
  selectedPatchId: null,
  selectedPatchPosition: { x: 0, y: 0 },
};
