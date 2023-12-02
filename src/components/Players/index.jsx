import './style.css';

export const Player1 = ({ state }) => {
  const renderPlayer1Fields = () => {
    const fields = [];
    for (let i = 0; i < 81; i++) {
      fields.push(<div key={i} className="gamePage__player1-field" style={{width: `${state.playerFieldSide}px`, height: `${state.playerFieldSide}px`,}}></div>);
    }
    return fields;
  };

  return (
    <div className="gamePage__player1">
      <div className="gamePage__player1--array">{renderPlayer1Fields()}</div>
      <div className="gamePage__player1--state">
        <p>
          <strong>HRÁČ 1</strong>
        </p>
        <p>počet knoflíku: {state.player1.buttons}</p>
      </div>
    </div>
  );
};

export const Player2 = ({ state }) => {
  const renderPlayer2Fields = () => {
    const fields = [];
    for (let i = 0; i < 81; i++) {
      fields.push(<div key={i} className="gamePage__player2-field" style={{width: `${state.playerFieldSide}px`, height: `${state.playerFieldSide}px`,}}></div>);
    }
    return fields;
  };

  return (
    <div className="gamePage__player2">
      <div className="gamePage__player2--state">
        <p>
          <strong>HRÁČ 2</strong>
        </p>
        <p>počet knoflíku: {state.player2.buttons}</p>
      </div>
      <div className="gamePage__player2--array">{renderPlayer2Fields()}</div>
    </div>
  );
};
