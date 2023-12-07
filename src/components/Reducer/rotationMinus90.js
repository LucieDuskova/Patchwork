export const RotationMinus90 = (state) => {
  const newSelectedPatchRotation = state.selectedPatchRotation - 90;

  return {
    ...state,
    selectedPatchRotation: newSelectedPatchRotation,
  };
};
