import { DecorButton } from '../Button';
import { Patch } from '../Patch';
import './style.css';
import { motion } from 'framer-motion';

export const Player = ({
  state,
  playerNumber,
  player,
  isCurrentPlayer,
  windowHeight,
}) => {
  const renderPlayerFields = () => {
    const fields = [];
    //pole 9 x 9
    for (let i = 0; i < 81; i++) {
      fields.push(
        <div
          key={i}
          className={`gamePage__player${playerNumber}-field`}
          style={{
            width: `${windowHeight}px`,
            height: `${windowHeight}px`,
          }}
        ></div>,
      );
    }
    return fields;
  };

  const playerLeftSpace =
    playerNumber === 1
      ? windowHeight * 9 + 50
      : 2 * state.x - windowHeight * 9 - 65;

  return (
    <>
      <div className={`gamePage__player${playerNumber}`}>
        <div
          className={`gamePage__player${playerNumber}--array`}
          style={{
            boxShadow: isCurrentPlayer ? '0px 0px 10px 10px #ffc43a' : '',
            filter: isCurrentPlayer ? '' : 'grayscale(100%)',
            width: `${windowHeight * 9}px`,
            top: `${player.gameBoard.top}px`,
            left: `${player.gameBoard.left}px`,
          }}
        >
          {renderPlayerFields()}
        </div>
        <div
          className={`gamePage__player${playerNumber}--state`}
          style={{
            top: `${player.gameBoard.top + 2 * windowHeight}px`,
            left: `${playerLeftSpace}px`,
          }}
        >
          <p className={isCurrentPlayer ? 'gamePage__player' : ''}>
            <strong>HRÁČ {playerNumber}</strong>
          </p>
          <p className="gamePage__currency">
            <strong style={{ paddingRight: '4px' }}>{player.buttons}</strong>{' '}
            <DecorButton sizeBoxTimer={state.sizeBoxTimer} size={0.9} />
          </p>
        </div>
      </div>

      <motion.div
        style={{
          filter: isCurrentPlayer ? '' : 'grayscale(100%)',
        }}
      >
        {player.arrayPatch.map((patch, index) => (
          <Patch
            patch={patch}
            index={3}
            position={{
              x: player.patchesPosition[index].x,
              y: player.patchesPosition[index].y,
            }}
            zIndex={900}
            windowHeight={windowHeight}
            key={patch.id}
            rotate={player.patchesPosition[index].rotation}
            rotateY={player.patchesPosition[index].flip}
            playersBoard={true}
          />
        ))}
      </motion.div>
    </>
  );
};
