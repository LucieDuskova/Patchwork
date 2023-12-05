import { DecorButton } from '../Button';
import { Patch } from '../Patch';
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
    <>
      <div className={`gamePage__player${playerNumber}`}>
        <div
          className={`gamePage__player${playerNumber}--array`}
          style={{
            boxShadow: isCurrentPlayer ? '0px 0px 10px 10px #ffc43a' : '',
            filter: isCurrentPlayer ? '' : 'grayscale(100%)',
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

      {console.log(player.arrayPatch, player.patchesPosition)}

      {player.arrayPatch.map((patch, index) => (
        <Patch
          patch={patch}
          index={3}
          position={{
            x: player.patchesPosition[index].x,
            y: player.patchesPosition[index].y,
          }}
          zIndex={900}
          rotate={player.patchesPosition[index].rotation}
          rotateY={player.patchesPosition[index].flip}
          playersBoard={true}
        />
      ))}
    </>
  );
};

/*
<script>

  gameBoard.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('game-piece')) {
      selectedPiece = event.target
    }
  });

  gameBoard.addEventListener('mousemove', (event) => {
    if (selectedPiece) {
      const mouseX = event.clientX - gameBoard.getBoundingClientRect().left;
      const mouseY = event.clientY - gameBoard.getBoundingClientRect().top;

      // Vypočítat novou pozici prvku s snapping
      const cellSize = 50;
      const snappedX = Math.floor(mouseX / cellSize) * cellSize;
      const snappedY = Math.floor(mouseY / cellSize) * cellSize;

      // Nastavit novou pozici prvku
      selectedPiece.style.left = `${snappedX}px`;
      selectedPiece.style.top = `${snappedY}px`;
    }
  });

  gameBoard.addEventListener('mouseup', () => {
    selectedPiece = null;
  });
</script>*/
