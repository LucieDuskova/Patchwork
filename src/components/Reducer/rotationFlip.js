export const RotationFlip = (state) => {
  const newSelectedPatchFlip = state.selectedPatchFlip === 180 ? 0 : 180;

  return {
    ...state,
    selectedPatchFlip: newSelectedPatchFlip,
  };
};
