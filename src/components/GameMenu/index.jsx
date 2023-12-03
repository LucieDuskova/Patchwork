import './style.css';

export const GameMenu = ({ state, dispatch }) => {
  return (
    <>
      <div className="gameMenu">
        <div className="gameMenu__button-rotation">
          <button className="gameMenu__button">O</button>
          <button
            className="gameMenu__button"
            onClick={() => dispatch({ type: 'ROTATION_MINUS_90' })}
          >
            {' '}
            &#9664;
          </button>
          <button
            className="gameMenu__button"
            onClick={() => dispatch({ type: 'ROTATION_PLUS_90' })}
          >
            &#9654;
          </button>
          <button className="gameMenu__button">O</button>
        </div>
        <button
          className="gameMenu__button"
          disabled={state.buttonBuy ? false : true}
          onClick={() => dispatch({ type: 'WANT_PATCH' })}
        >
          koupit látku
        </button>
        <button
          className="gameMenu__button"
          onClick={() => dispatch({ type: 'SKIP_TURN' })}
        >
          vynechat tah
        </button>
      </div>
    </>
  );
};
