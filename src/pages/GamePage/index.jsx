import { GameMenu } from '../../components/GameMenu';
import { Patch } from '../../components/Patch';
import { Player1 } from '../../components/Players';
import { Player2 } from '../../components/Players';
import './style.css';

export const GamePage = () => {
  return (
    <>
      <Patch />

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
