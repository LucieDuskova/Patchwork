import { GameArrayTime } from '../../components/GameArrayTime';
import { GameMenu } from '../../components/GameMenu';
import { Patches } from '../../components/Patches';
import { useReducer } from 'react';
import { Player1 } from '../../components/Players';
import { Player2 } from '../../components/Players';
import { reducer, defaultState } from '../../components/Reducer';
import './style.css';

export const GamePage = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <>
      <GameArrayTime state={state} />
      <Patches dispatch={dispatch} state={state} />
      <div className="GamePage__playerBoards">
        <Player1 state={state} />
        <GameMenu dispatch={dispatch} state={state} />
        <Player2 state={state} />
      </div>
    </>
  );
};
