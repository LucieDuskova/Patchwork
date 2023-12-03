import * as React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const Patch = ({
  patch,
  index,
  dispatch,
  state,
  x,
  y,
  zIndex,
  rotate,
  rotateY,
}) => {
  const controls = useAnimation();
  // console.log( zIndex);
  // console.log(y);

  useEffect(() => {
    // nastavení pozic látek
    controls.start({
      y: y,
      x: x,
      position: 'absolute',
      zIndex: zIndex,
      rotate: rotate,
      rotateY: rotateY,
    });
  }, [y, x, zIndex, rotate, rotateY]);

  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        /*animate={{
          y: `${y.y}px`,
          x: `${x.x}px`,
          position: zIndex.position,
          zIndex: zIndex.zIndex,
        }}*/
        animate={controls}
        drag={index < 3 ? true : false}
        onDragEnd={(event, info) => {
          dispatch({
            type: 'ON_DRAG_END',
            patchId: patch.id,
            patchInfo: info,
            patchX: x,
            patchY: y,
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
            {`P: ${patch.price}, T: ${patch.time} I:${patch.income}`}
          </text>
        </g>
      </motion.svg>
    </>
  );
};
