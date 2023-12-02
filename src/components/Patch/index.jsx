import * as React from 'react';
import { motion } from 'framer-motion';

export const Patch = ({ patch, index, dispatch, state }) => {
  const xPossition =
    state.selectedPatchId === patch.id
      ? {
          x: state.selectedPatchPosition.x,
        }
      : {
          x: state.x + state.points[index][0],
        };

  const yPossition =
    state.selectedPatchId === patch.id
      ? {
          y: state.selectedPatchPosition.y,
        }
      : {
          y: state.y + state.points[index][1],
        };

  const zIndex =
    state.selectedPatchId === patch.id
      ? { position: 'absolute', zIndex: 1001 } // Posunutí vybrané látky nad ostatní
      : { position: 'absolute', zIndex: 1000 };

  // console.log( zIndex);
  // console.log(yPossition);

  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          y: `${yPossition.y}px`,
          x: `${xPossition.x}px`,
          position: zIndex.position,
          zIndex: zIndex.zIndex,
        }}
        drag={index < 3 ? true : false}
        onDragEnd={(event, info) => {
          dispatch({
            type: 'ON_DRAG_END',
            patchId: patch.id,
            patchInfo: info,
            patchX: xPossition.x,
            patchY: yPossition.y,
          });
        }}
        dragMomentum={false} //neodjíždějí nám látky po puštění
        viewBox={patch.viewBox}
        width={`${patch.viewBox.split(' ').map(Number)[2] * 7}px`}
      >
        <g>
          <path
            d={patch.svg}
            fill={patch.color}
            stroke="#000000"
            strokeWidth="0.15"
          />

          <text x="50%" y="50%" textAnchor="middle" fill="#000000" fontSize="2">
            {`P: ${patch.price}, T: ${patch.time}`}
          </text>
        </g>
      </motion.svg>
    </>
  );
};
