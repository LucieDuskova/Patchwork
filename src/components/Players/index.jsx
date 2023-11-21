import './style.css';

export const Player1 = () => {
  /*
  return (
    <div className="gamePage__player1">
      {() => {
        for (let i = 0; i < 81; i++) {
          <div className="gamePage__player1-field"></div>;
        }
      }}
    </div>
  );*/

  return (
    <div className="gamePage__player1">
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
      <div className="gamePage__player1-field"></div>
    </div>
  );
};

export const Player2 = () => {
  return (
    <div className="gamePage__player2">
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
      <div className="gamePage__player2-field"></div>
    </div>
  );
};
