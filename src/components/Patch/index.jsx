import * as React from 'react';
import './style.css';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { DecorButton, buttonData } from '../Button';
import { DecorHourglass } from '../Hourglass';

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
  windowHeight,
  state,
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
        .map((x) => (x / 5) * windowHeight);
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

  const patchHeight = patch.filled.length;
  const patchWidth = patch.filled[0].length;
  let i, j;

  const button = [];
  for (i = 0; i < patchHeight; i++) {
    for (j = 0; j < patchWidth; j++) {
      if (patch.filled[i][j] === 2) {
        button.push(
          <path
            key={i + ' ' + j}
            d={buttonData.svg}
            fill={
              index < 3 && !canUse
                ? 'rgba(128, 128, 128, 0.5)'
                : buttonData.color
            }
            stroke="#000000"
            strokeWidth="0.1"
            transform={`translate(${5 * j}, ${5 * i})`}
          />,
        );
      }
    }
  }

  return (
    <>
      <div
        style={{
          position: 'relative',
        }}
      >
        {playersBoard ? (
          <></>
        ) : (
          <motion.div
            className="descriptionPatch"
            animate={{
              y: position.y,
              x: position.x,
            }}
          >
            <div>
              <DecorButton sizeBoxTimer={state.sizeBoxTimer} size={0.7} />{' '}
              {patch.price}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={DecorHourglass.viewBox}
                width={`${state.sizeBoxTimer * 0.7}px`}
              >
                <g>
                  <path
                    d={DecorHourglass.svg}
                    fill={DecorHourglass.color}
                    stroke="#000000"
                    strokeWidth="0.03"
                  />
                </g>
              </svg>{' '}
              {patch.time}
            </div>
          </motion.div>
        )}
      </div>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        animate={controls}
        drag={index < 3 && canUse ? true : false}
        state={{ top: 0 }}
        onDragEnd={(_, info) => {
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
        width={`${
          (patch.viewBox.split(' ').map(Number)[2] / 5) * windowHeight
        }px`}
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
              className="dva"
              d={patch.svg}
              fill="none"
              stroke="#606060"
              strokeWidth="1px"
              strokeDasharray="0.5 1"
              strokeDashoffset="3"
            />
          ) : null}
        </g>
        {button}
      </motion.svg>
    </>
  );
};
