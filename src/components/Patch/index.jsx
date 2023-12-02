import * as React from 'react';
import { useEffect, useState } from 'react';
// import "./styles.css";
import { motion } from 'framer-motion';
import { Patchs } from '../Patchs';

//funkce, která mi požadovaný prvek přesune na konec pole
const arraymove = (arr, fromIndex) => {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(33, 0, element);
};

export const Patch = ({ dispatch, state }) => {
  const [userWidth, setUserWidth] = useState(document.body.clientWidth);
  const [patchesMixed, setPatchesMixed] = useState([]);

  // useEffectů může být použito několik v kódu
  useEffect(() => {
    setUserWidth(document.body.clientWidth); // Re-render now that you know the real height
    const patches = [...Patchs]; // kopie původních Patchs

    patches.sort(() => Math.random() - 0.5); // náhodné seřazení látek
    const indexOf0_0 = patches.findIndex((x) => x.id === '0_0'); // naleznutí indexu 0_0
    //console.log(indexOf0_0);

    arraymove(patches, indexOf0_0); // posunutí 0_0 nakonec
    console.log(patches.findIndex((x) => x.id === '0_0'));
    setPatchesMixed(patches);
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
  const b = 250; // výška oválu
  const x = userWidth / 2; // pozice zleva, šířka okna / 2 (střed okna)
  const y = 420; // pozice ze shora
  const numPoints = 33;

  const points = distributePointsOnEllipse(a, b, numPoints);

  //najít 0_0 a dát ho na konec
  //zamíchat kopii z uSeReducer, ne původní látky

  return (
    <>
      {patchesMixed.map((patch, index) => (
        <motion.svg
          key={patch.id}
          xmlns="http://www.w3.org/2000/svg"
          // style={
          //   /* jsem vybrana latka ? {aktualni pozice} : moje původní pozice*/ {
          //     top: `${y + points[index][1]}px`,
          //     left: `${x + points[index][0]}px`,
          //     position: 'absolute',
          //     zIndex: 1000,
          //   }
          // }

          animate={
            state.selectedPatchId === patch.id
              ? {
                  top: `${
                    y + points[index][1] + (state.selectedPatchPosition.y - y)
                  }px`,
                  left: `${
                    x + points[index][0] + (state.selectedPatchPosition.x - x)
                  }px`,
                  position: 'absolute',
                  zIndex: 1001, // Posunutí vybrané látky nad ostatní
                }
              : {
                  top: `${y + points[index][1]}px`,
                  left: `${x + points[index][0]}px`,
                  position: 'absolute',
                  zIndex: 1000,
                }
          }
          drag={index < 3 ? true : false}
          onDragEnd={(event, info) => {
            dispatch({
              type: 'ON_DRAG_END',
              patchId: patch.id,
              patchInfo: info,
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
