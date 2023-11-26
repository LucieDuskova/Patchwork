import './style.css';

export const Player1 = () => {
  const renderPlayer1Fields = () => {
    const fields = [];
    for (let i = 0; i < 81; i++) {
      fields.push(<div key={i} className="gamePage__player1-field"></div>);
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
        <p>počet knoflíku: 5</p>
      </div>
    </div>
  );
};

export const Player2 = () => {
  const renderPlayer2Fields = () => {
    const fields = [];
    for (let i = 0; i < 81; i++) {
      fields.push(<div key={i} className="gamePage__player2-field"></div>);
    }
    return fields;
  };

  return (
    <div className="gamePage__player2">
      <div className="gamePage__player2--state">
        <p>
          <strong>HRÁČ 2</strong>
        </p>
        <p>počet knoflíku: 10</p>
      </div>
      <div className="gamePage__player2--array">{renderPlayer2Fields()}</div>
    </div>
  );
};
