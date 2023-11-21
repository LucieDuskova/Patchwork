import * as React from 'react';
// import "./styles.css";
import { motion } from 'framer-motion';
import { Patchs } from '../Patchs';

export const Patch = () => {
  function distributePointsOnEllipse(a, b, numPoints) {
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      const theta = (2 * Math.PI * i) / numPoints;
      const x = a * Math.cos(theta);
      const y = b * Math.sin(theta);
      points.push([parseInt(x), parseInt(y)]);
    }

    return points;
  }

  // Example usage:
  const a = 500; // šířka oválu
  const b = 300; // výška oválu
  const x = 700; // pozice zleva
  const y = 400; // pozice ze shora
  const numPoints = 33;

  const points = distributePointsOnEllipse(a, b, numPoints);
  /*
  const arrayPositionPush = () => {
    points.map((p) => (
      {positionArray.push(p)}
    ));
  };*/
  {
    console.log(points);
    console.log('point 0: ' + points[0]);
    console.log('point 1: ' + points[1]);
  }
  return (
    <>
      {Patchs.map((patch) => (
        <motion.svg
          key={patch.id}
          xmlns="http://www.w3.org/2000/svg"
          style={{ top: `${y} px`, left: `${x}px` }}
          drag
          dragMomentum={false}
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
          </g>
        </motion.svg>
      ))}

      {points.map((p) => (
        <div
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: 'lightblue',
            position: 'absolute',
            top: `${y + p[1]}px`,
            left: `${x + p[0]}px`,
          }}
        ></div>
      ))}
    </>
  );
};
