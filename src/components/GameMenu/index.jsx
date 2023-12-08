import './style.css';

export const GameMenu = ({ state, dispatch }) => {
  const currentPlayer =
    state.currentPlayer === 'player1' ? state.player1 : state.player2;
  const priceDescriptionPatch = state.patchesMixed.find(
    (x) => x.id === state.selectedPatchId,
  );

  return (
    <>
      <div
        className="gameMenu"
        style={{
          top: `${state.player1.gameBoard.top + 250}px`,
          left: `${state.x - 90}px`,
        }}
      >
        <div className="gameMenu__button-rotation">
          <button
            className="gameMenu__button"
            disabled={
              priceDescriptionPatch?.price <= currentPlayer.buttons
                ? false
                : true
            }
            onClick={() => dispatch({ type: 'ROTATION_FLIP' })}
          >
            P
          </button>
          <button
            className="gameMenu__button"
            disabled={
              priceDescriptionPatch?.price <= currentPlayer.buttons
                ? false
                : true
            }
            onClick={() => dispatch({ type: 'ROTATION_MINUS_90' })}
          >
            {' '}
            &#9664;
          </button>
          <button
            className="gameMenu__button"
            disabled={
              priceDescriptionPatch?.price <= currentPlayer.buttons
                ? false
                : true
            }
            onClick={() => dispatch({ type: 'ROTATION_PLUS_90' })}
          >
            &#9654;
          </button>
          <button
            className="gameMenu__button"
            disabled={
              priceDescriptionPatch?.price <= currentPlayer.buttons
                ? false
                : true
            }
            onClick={() => dispatch({ type: 'ROTATION_RESET' })}
          >
            R
          </button>
        </div>
        <button
          className="gameMenu__button gameMenu__button--large"
          disabled={
            state.buttonBuy &&
            priceDescriptionPatch?.price <= currentPlayer.buttons
              ? false
              : true
          }
          onClick={() => dispatch({ type: 'WANT_PATCH' })}
        >
          koupit látku
        </button>
        <button
          className="gameMenu__button gameMenu__button--large"
          onClick={() => dispatch({ type: 'SKIP_TURN' })}
        >
          vynechat tah
        </button>
      </div>
    </>
  );
};
