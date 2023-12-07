import { GameArrayTime } from '../../components/GameArrayTime';
import { GameMenu } from '../../components/GameMenu';
import { Patches } from '../../components/Patches';
import { useEffect, useReducer } from 'react';
import { Player } from '../../components/Player';
import { reducer, defaultState } from '../../components/Reducer';
import { useWindowSize } from '../../components/windowSize';

export const GamePage = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [windowWidth, windowHeight] = useWindowSize();

  // useEffectů může být použito několik v kódu
  useEffect(() => {
    dispatch({
      type: 'WINDOW_SIZE',
      windowWidth: windowWidth,
      windowHeight: windowHeight,
    });
  }, [windowWidth, windowHeight]);

  return (
    <>
      <GameArrayTime state={state} />
      <Patches dispatch={dispatch} state={state} />

      <Player
        playerNumber={1}
        windowWeight={state.windowWeight}
        player={state.player1}
        isCurrentPlayer={state.currentPlayer === 'player1'}
        playerFieldSize={state.playerFieldSize}
        state={state}
      />
      <GameMenu dispatch={dispatch} state={state} />
      <Player
        playerNumber={2}
        windowWeight={state.windowWeight}
        player={state.player2}
        isCurrentPlayer={state.currentPlayer === 'player2'}
        playerFieldSize={state.playerFieldSize}
        state={state}
      />
    </>
  );
};
