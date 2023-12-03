import { GameArrayTime } from '../../components/GameArrayTime';
import { GameMenu } from '../../components/GameMenu';
import { Patches } from '../../components/Patches';
import { useReducer } from 'react';
import { Player } from '../../components/Player';
import { reducer, defaultState } from '../../components/Reducer';
import './style.css';

export const GamePage = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <>
      <GameArrayTime state={state} />
      <Patches dispatch={dispatch} state={state} />

      <div className="GamePage__playerBoards">
        <Player
          playerNumber={1}
          player={state.player1}
          isCurrentPlayer={state.currentPlayer === 'player1'}
          playerFieldSize={state.playerFieldSize}
        />
        <GameMenu dispatch={dispatch} state={state} />
        <Player
          playerNumber={2}
          player={state.player2}
          isCurrentPlayer={state.currentPlayer === 'player2'}
          playerFieldSize={state.playerFieldSize}
        />
      </div>
    </>
  );
};
