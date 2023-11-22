import * as React from 'react';
import { useEffect } from 'react';
// import "./styles.css";
import { motion } from 'framer-motion';
import { Patchs } from '../Patchs';

export const Patch = () => {
  function distributePointsOnEllipse(a, b, numPoints) {
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      const theta = (2 * Math.PI * i) / numPoints;
      const x = a * Math.sin(theta);
      const y = b * Math.cos(theta);
      points.push([parseInt(x), parseInt(y)]);
    }

    return points;
  }

  // Example usage:
  const a = document.body.clientWidth / 2.5; // šířka oválu šířka okna / 2,5
  const b = 300; // výška oválu
  const x = document.body.clientWidth / 2; // pozice zleva, šířka okna / 2 (střed okna)
  const y = 450; // pozice ze shora
  const numPoints = 33;

  const points = distributePointsOnEllipse(a, b, numPoints);

  points.sort(() => Math.random() - 0.5); // náhodné seřazení látek

  return (
    <>
      {Patchs.map((patch, index) => (
        <motion.svg
          key={patch.id}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            top: `${y + points[index][1]}px`,
            left: `${x + points[index][0]}px`,
            position: 'absolute',
          }}
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
    </>
  );
};
