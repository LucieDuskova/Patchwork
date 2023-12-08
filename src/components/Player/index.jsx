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

  //315, 130 = 455
  const playerLeftSpace = playerNumber === 1 ? 380 : state.x + state.x / 1.7;


console.log(state.player2.gameBoard.bottom)

  return (
    <>
      <div className={`gamePage__player${playerNumber}`}
    
    style={{
      bottom: '15px',
    }}>
        <div
          className={`gamePage__player${playerNumber}--array`}
          style={{
            boxShadow: isCurrentPlayer ? '0px 0px 10px 10px #ffc43a' : '',
            filter: isCurrentPlayer ? '' : 'grayscale(100%)',
            width: `${windowHeight * 9}px`,
            // bottom: '15px',
            left: `${player.gameBoard.left}px`,
          }}
        >
          {renderPlayerFields()}
        </div>
        <div
          className={`gamePage__player${playerNumber}--state`}
          style={{
            // top: `${state.y + state.y * 1.4}px`,
            bottom: '15px',
            left: `${playerLeftSpace}px`,
          }}
        >
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
