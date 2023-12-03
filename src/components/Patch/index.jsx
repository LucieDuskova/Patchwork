import * as React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const Patch = ({
  patch,
  index,
  dispatch,
  position,
  zIndex,
  rotate,
  rotateY,
  canUse,
  playersBoard,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    // nastavení pozic látek

    let xt = 0;
    let yt = 0;

    if (rotate % 180 !== 0) {
      const size = patch.viewBox
        .split(' ')
        .map(Number)
        .map((x) => x * 7);
      const heightPatch = size[3];
      const widthPatch = size[2];

      xt = (widthPatch - heightPatch) / 2;
      yt = (heightPatch - widthPatch) / 2;
    }

    if (playersBoard) {
      controls.set({
        y: position.y - yt,
        x: position.x - xt,
        position: 'absolute',
        zIndex: zIndex,
        rotate: rotate,
        rotateY: rotateY,
      });
    } else {
      controls.start({
        y: position.y - yt,
        x: position.x - xt,
        position: 'absolute',
        zIndex: zIndex,
        rotate: rotate,
        rotateY: rotateY,
      });
    }
  }, [position, zIndex, rotate, rotateY]);

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
            patchX: position.x,
            patchY: position.y,
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
