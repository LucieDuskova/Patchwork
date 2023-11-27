import * as React from 'react';
import { useEffect, useState } from 'react';
// import "./styles.css";
import { motion } from 'framer-motion';
import { Patchs } from '../Patchs';

export const Patch = ({ dispatch, state }) => {
  const [userWidth, setUserWidth] = useState(document.body.clientWidth);

  useEffect(() => {
    setUserWidth(document.body.clientWidth); // Re-render now that you know the real height
  }, []);

  const distributePointsOnEllipse = (a, b, numPoints) => {
    const points = [];

    // fce na vytvoření 33 pozic pro patch
    for (let i = 0; i < numPoints; i++) {
      const theta = (2 * Math.PI * i) / numPoints;
      const x = a * Math.sin(theta);
      const y = b * Math.cos(theta);
      points.push([parseInt(x), parseInt(y)]);
    }

    return points;
  };

  // Ovál parametry:
  const a = userWidth / 2.5; // šířka oválu šířka okna / 2,5
  const b = 300; // výška oválu
  const x = userWidth / 2; // pozice zleva, šířka okna / 2 (střed okna)
  const y = 450; // pozice ze shora
  const numPoints = 33;

  const points = distributePointsOnEllipse(a, b, numPoints);

  Patchs.sort(() => Math.random() - 0.5); // náhodné seřazení látek
  //najít 0_0 a dát ho na konec
  //zamíchat kopii z uSeReducer, ne původní látky
  return (
    <>
      {Patchs.map((patch, index) => (
        <motion.svg
          key={patch.id}
          xmlns="http://www.w3.org/2000/svg"
          style={
            /* jsem vybrana latka ? {aktualni pozice} :*/ {
              top: `${y + points[index][1]}px`,
              left: `${x + points[index][0]}px`,
              position: 'absolute',
            }
          }
          drag={index < 3 ? true : false}
          onDragEnd={() => dispatch({ type: 'ON_DRAG_END', id: patch.id })}
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

            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="#000000"
              fontSize="2"
            >
              {`P: ${patch.price}, T: ${patch.time}`}
            </text>
          </g>
        </motion.svg>
      ))}
    </>
  );
};
