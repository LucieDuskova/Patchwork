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

  return (
    <>
      {state.patchesMixed.map((patch, index) => (
        <Patch
          patch={patch}
          index={index}
          dispatch={dispatch}
          state={state}
          key={patch.id}
        />
      ))}
    </>
  );
};
