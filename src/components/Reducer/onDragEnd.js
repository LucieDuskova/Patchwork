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

  const currentPatchAngleX = state.selectedPatchRotation % 180 !== 0 ? 3 : 2;
  const currentPatchAngleY = state.selectedPatchRotation % 180 !== 0 ? 2 : 3;

  const selectedPatchPositionWidthX =
    newSelectedPatchPosition.x +
    (selectedPatch.viewBox.split(' ').map(Number)[currentPatchAngleX] / 5) *
      state.windowHeight; // šířka látky
  const selectedPatchPositionWidthY =
    newSelectedPatchPosition.y +
    (selectedPatch.viewBox.split(' ').map(Number)[currentPatchAngleY] / 5) *
      state.windowHeight; // výška látky
  let newButtonBuy = false;

  const halfFIeld = 0.5 * state.windowHeight;

  //podmínka, zde je vybraná látka v poli aktivního hráče (+ odchylka pro lidskou nedokonalost (snapping))
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
        (newSelectedPatchPosition.x - areacurrentPlayerX) / state.windowHeight,
      ) *
        state.windowHeight +
      areacurrentPlayerX;

    newSelectedPatchPosition.y =
      Math.round(
        (newSelectedPatchPosition.y - areacurrentPlayerY) / state.windowHeight,
      ) *
        state.windowHeight +
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
