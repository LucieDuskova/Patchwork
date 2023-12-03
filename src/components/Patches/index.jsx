import * as React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PatchesData } from '../PatchesData';
import { Patch } from '../Patch';

export const Patches = ({ dispatch, state }) => {
  // useEffectů může být použito několik v kódu
  useEffect(() => {
    // setUserWidth(document.body.clientWidth);
  }, []);

  const patchesToDraw = state.patchesMixed.map((patch, index) => {
    const xPossition =
      state.selectedPatchId === patch.id
        ? // vybraná látka bude tam, kam ji položíme
          state.selectedPatchPosition.x
        : // pokud látka není vybraná, bude na elipse
          state.x + state.points[index][0];

    const yPossition =
      state.selectedPatchId === patch.id
        ? // vybraná látka bude tam, kam ji položíme
          state.selectedPatchPosition.y
        : // pokud látka není vybraná, bude na elipse
          state.y + state.points[index][1];

    const zIndex =
      state.selectedPatchId === patch.id
        ? 1001 // Posunutí vybrané látky nad ostatní
        : 1000;

    const rotate =
      state.selectedPatchId === patch.id ? state.selectedPatchRotation : 0;

    const rotateY =
      state.selectedPatchId === patch.id ? state.selectedPatchFlip : 0;
    return (
      <Patch
        patch={patch}
        index={index}
        dispatch={dispatch}
        state={state}
        key={patch.id}
        x={xPossition}
        y={yPossition}
        zIndex={zIndex}
        rotate={rotate}
        rotateY={rotateY}
      />
    );
  });

  return <>{patchesToDraw}</>;
};
