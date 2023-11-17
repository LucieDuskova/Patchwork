import * as React from 'react';
// import "./styles.css";
import { motion } from 'framer-motion';
import { Patchs } from '../Patchs';

export const Patch = () => (
  <>
    {Patchs.map((patch) => (
      <motion.svg
        key={patch.id}
        xmlns="http://www.w3.org/2000/svg"
        drag
        dragMomentum={false}
        viewBox={patch.viewBox}
        width={`${patch.viewBox.split(' ').map(Number)[2] * 7}px`}
      >
        <g>
          <path d={patch.svg} fill={patch.color} />
        </g>
      </motion.svg>
    ))}
  </>
);
