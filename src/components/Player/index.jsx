import { DecorButton } from '../Button';
import './style.css';

export const Player = ({
  playerNumber,
  player,
  isCurrentPlayer,
  playerFieldSize,
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
            width: `${playerFieldSize}px`,
            height: `${playerFieldSize}px`,
          }}
        ></div>,
      );
    }
    return fields;
  };
  return (
    <div className={`gamePage__player${playerNumber}`}>
      <div
        className={`gamePage__player${playerNumber}--array`}
        style={{
          width: `${player.gameBoard.width}px`,
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
  );
};
