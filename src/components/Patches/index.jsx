import * as React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PatchesData } from '../PatchesData';
import { Patch } from '../Patch';
import { BoxForTable } from '../FunctionsGame';

export const Patches = ({ dispatch, state }) => {
  // useEffectů může být použito několik v kódu
  useEffect(() => {
    // setUserWidth(document.body.clientWidth);
  }, []);

  return (
    <>
       <BoxForTable state={state}/>
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
