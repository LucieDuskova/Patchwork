import './style.css';
import { DecorButton } from '../Button';

import { motion } from 'framer-motion';

export const Player1 = ({ state }) => {
  const renderPlayer1Fields = () => {
    const fields = [];
    for (let i = 0; i < 81; i++) {
      fields.push(
        <div
          key={i}
          className="gamePage__player1-field"
          style={{
            width: `${state.playerFieldSide}px`,
            height: `${state.playerFieldSide}px`,
          }}
        ></div>,
      );
    }
    return fields;
  };

  return (
    <div className="gamePage__player1">
      <div className="gamePage__player1--array">{renderPlayer1Fields()}</div>
      <div className="gamePage__player1--state">
        <p
          className={
            state.currentPlayer === 'player1' ? 'gamePage__player' : ''
          }
        >
          <strong>HRÁČ 1</strong>
        </p>
        <p>
          počet knoflíku:{' '}
          <strong>
            {state.player1.buttons}{' '}
            <motion.svg
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
            </motion.svg>
          </strong>
        </p>
      </div>
    </div>
  );
};

export const Player2 = ({ state }) => {
  const renderPlayer2Fields = () => {
    const fields = [];
    for (let i = 0; i < 81; i++) {
      fields.push(
        <div
          key={i}
          className="gamePage__player2-field"
          style={{
            width: `${state.playerFieldSide}px`,
            height: `${state.playerFieldSide}px`,
          }}
        ></div>,
      );
    }
    return fields;
  };

  return (
    <div className="gamePage__player2">
      <div className="gamePage__player2--state">
        <p
          className={
            state.currentPlayer === 'player2' ? 'gamePage__player' : ''
          }
        >
          <strong>HRÁČ 2</strong>
        </p>
        <p>
          počet knoflíku: <strong>{state.player2.buttons}</strong>{' '}
          <motion.svg
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
          </motion.svg>
        </p>
      </div>
      <div className="gamePage__player2--array">{renderPlayer2Fields()}</div>
    </div>
  );
};
