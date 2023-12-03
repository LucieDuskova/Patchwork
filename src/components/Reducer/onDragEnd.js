export const OnDragEnd = (state, action) => {
  const newSelectedPatchId = action.patchId;
  const newSelectedPatchPosition = {
    x: action.patchX + action.patchInfo.offset.x,
    y: action.patchY + action.patchInfo.offset.y,
  };

  //podívat se, zda je vybraná látka v poli aktivního hráče
  const currentPlayer =
    state.currentPlayer === 'player1' ? state.player1 : state.player2;

  const selectedPatch = state.patchesMixed.find(
    (x) => x.id === newSelectedPatchId,
  );

  const areacurrentPlayerX = currentPlayer.gameBoard.left;
  const areacurrentPlayerY = currentPlayer.gameBoard.top;
  const areacurrentPlayerWidth = currentPlayer.gameBoard.width;
  const selectedPatchPositionWidthX =
    newSelectedPatchPosition.x +
    selectedPatch.viewBox.split(' ').map(Number)[2] * 7;
  const selectedPatchPositionWidthY =
    newSelectedPatchPosition.y +
    selectedPatch.viewBox.split(' ').map(Number)[3] * 7;
  let newButtonBuy = false;

  const halfFIeld = 0.5 * state.playerFieldSize;

  //podmínka, zde je vybraná látka v poli aktivního hráče (+ odchylka pro lidskou nedokonalost)
  if (
    newSelectedPatchPosition.x > areacurrentPlayerX - halfFIeld &&
    newSelectedPatchPosition.y > areacurrentPlayerY - halfFIeld &&
    selectedPatchPositionWidthX <
      areacurrentPlayerX + areacurrentPlayerWidth + halfFIeld &&
    selectedPatchPositionWidthY <
      areacurrentPlayerY + areacurrentPlayerWidth + halfFIeld
  ) {
    newSelectedPatchPosition.x =
      Math.round(
        (newSelectedPatchPosition.x - areacurrentPlayerX) /
          state.playerFieldSize,
      ) *
        state.playerFieldSize +
      areacurrentPlayerX;

    newSelectedPatchPosition.y =
      Math.round(
        (newSelectedPatchPosition.y - areacurrentPlayerY) /
          state.playerFieldSize,
      ) *
        state.playerFieldSize +
      areacurrentPlayerY;
    newButtonBuy = true;
  }

  // chci resetovat otáčení, ale jen, pokud jsem vybrala jinou látku
  const newSelectedPatchRotation =
    newSelectedPatchId === state.selectedPatchId
      ? state.selectedPatchRotation
      : 0;

  // chci resetovat flipování, ale jen, pokud jsem vybrala jinou látku
  const newSelectedPatchFlip =
    newSelectedPatchId === state.selectedPatchId ? state.selectedPatchFlip : 0;

  return {
    ...state,
    selectedPatchId: newSelectedPatchId,
    selectedPatchPosition: newSelectedPatchPosition,
    selectedPatchRotation: newSelectedPatchRotation,
    selectedPatchFlip: newSelectedPatchFlip,
    buttonBuy: newButtonBuy,
  };
};
