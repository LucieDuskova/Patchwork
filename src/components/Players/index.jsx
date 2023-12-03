import './style.css';

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
      <div className="gamePage__player1--array" 
       style={{
        width: `${state.player1.gameBoard.width}px`,
        top: `${state.player1.gameBoard.top}px`,
        left: `${state.player1.gameBoard.left}px`,
      }}
      >{renderPlayer1Fields()}</div>
      <div className="gamePage__player1--state">
        <p
          className={
            state.currentPlayer === 'player1' ? 'gamePage__player' : ''
          }
        >
          <strong>HRÁČ 1</strong>
        </p>
        <p>počet knoflíku: <strong>{state.player1.buttons}</strong></p>
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
        <p>počet knoflíku: <strong>{state.player2.buttons}</strong></p>
      </div>
      <div className="gamePage__player2--array"
      
      style={{
        width: `${state.player2.gameBoard.width}px`,
        top: `${state.player2.gameBoard.top}px`,
        left: `${state.player2.gameBoard.left}px`,
      }}
      
      
      >{renderPlayer2Fields()}</div>
    </div>
  );
};
