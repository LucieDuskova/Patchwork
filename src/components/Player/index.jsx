import { DecorButton } from '../Button';
import { Patch } from '../Patch';
import './style.css';
import { motion } from 'framer-motion';

export const Player = ({
  playerNumber,
  player,
  isCurrentPlayer,
  windowWeight
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
            width: `${5/5*windowWeight}px`,
            height: `${5/5*windowWeight}px`,
          }}
        ></div>,
      );
    }
    return fields;
  };

  return (
    <>
      <div className={`gamePage__player${playerNumber}`}>
        <div
          className={`gamePage__player${playerNumber}--array`}
          style={{
            boxShadow: isCurrentPlayer ? '0px 0px 10px 10px #ffc43a' : '',
            filter: isCurrentPlayer ? '' : 'grayscale(100%)',
            width: `${windowWeight*9}px`,
            top: `${player.gameBoard.top}px`,
            left: `${player.gameBoard.left}px`,
          }}
        >
          {renderPlayerFields()}
        </div>
        <div className={`gamePage__player${playerNumber}--state`}>
          <p className={isCurrentPlayer ? 'gamePage__player' : ''}>
            <strong>HRÁČ {playerNumber}</strong>
          </p>

          <p className="gamePage__currency">
            <strong>{player.buttons}</strong>{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={DecorButton.viewBox}
              width={`30px`}
            >
              <g>
                <path
                  d={DecorButton.svg}
                  fill={DecorButton.color}
                  stroke="#000000"
                  strokeWidth="0.15"
                />
              </g>
            </svg>
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
            width={`${patch.viewBox.split(' ').map(Number)[2] /5*windowWeight}px`}
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
