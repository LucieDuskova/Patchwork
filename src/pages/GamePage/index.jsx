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
      <GameArrayTime state={state} />
      <Patch dispatch={dispatch} state={state} />
      <main>
        <div className="time"></div>
        <div className="GamePage__playerBoards">
          <Player1  state={state}/>
          <GameMenu />
          <Player2  state={state}/>
        </div>
      </main>
    </>
  );
};
