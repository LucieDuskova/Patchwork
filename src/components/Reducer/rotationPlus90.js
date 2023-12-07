export const RotationPlus90 = (state) => {
  const newSelectedPatchRotation = state.selectedPatchRotation + 90;

  return {
    ...state,
    selectedPatchRotation: newSelectedPatchRotation,
  };
};
