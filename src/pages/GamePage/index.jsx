import { GameArrayTime } from '../../components/GameArrayTime';
import { GameMenu } from '../../components/GameMenu';
import { Patch } from '../../components/Patch';
import { useReducer } from 'react';
import { Player1 } from '../../components/Players';
import { Player2 } from '../../components/Players';
import { reducer, defaultState } from '../../components/Reducer';
import './style.css';

export const GamePage = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <>
      <GameArrayTime />
      <Patch dispatch={dispatch} state={state} />
      <main>
        <div className="time"></div>
        <div className="GamePage__playerBoards">
          <Player1 />
          <GameMenu />
          <Player2 />
        </div>
      </main>
    </>
  );
};
