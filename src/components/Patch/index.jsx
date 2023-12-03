import * as React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const Patch = ({
  patch,
  index,
  dispatch,
  x,
  y,
  zIndex,
  rotate,
  rotateY,
  canUse,
  playersBoard,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    // nastavení pozic látek
    if (playersBoard) {
      controls.set({
        y: y,
        x: x,
        position: 'absolute',
        zIndex: zIndex,
        rotate: rotate,
        rotateY: rotateY,
      });
    } else {
      controls.start({
        y: y,
        x: x,
        position: 'absolute',
        zIndex: zIndex,
        rotate: rotate,
        rotateY: rotateY,
      });
    }
  }, [y, x, zIndex, rotate, rotateY]);

  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        animate={controls}
        drag={index < 3 && canUse ? true : false}
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
            fill={
              index < 3 && !canUse ? 'rgba(128, 128, 128, 0.5)' : patch.color
            }
            stroke={
              index < 3 && !canUse ? 'rgba(128, 128, 128, 0.5)' : '#000000'
            }
            strokeWidth="0.15"
          />
          {playersBoard ? (
            <path
              d={patch.svg}
              fill="none"
              stroke="#606060"
              strokeWidth="1px"
              strokeDasharray="0.5 1"
              strokeDashoffset="3"
            />
          ) : null}

          <text x="50%" y="50%" textAnchor="middle" fill="#000000" fontSize="2">
            {`P: ${patch.price}, T: ${patch.time} I:${patch.income}`}
          </text>
        </g>
      </motion.svg>
    </>
  );
};
