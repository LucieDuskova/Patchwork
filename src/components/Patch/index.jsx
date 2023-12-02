import * as React from 'react';
import { useEffect, useState } from 'react';
// import "./styles.css";
import { motion } from 'framer-motion';
import { Patchs } from '../Patchs';

//funkce, která mi požadovaný prvek přesune na konec pole

// const arraymove = (arr, fromIndex) => {
//   var element = arr[fromIndex];
//   arr.splice(fromIndex, 1);
//   arr.splice(33, 0, element);
// };

export const Patch = ({ dispatch, state }) => {
  const [userWidth, setUserWidth] = useState(document.body.clientWidth);

  // useEffectů může být použito několik v kódu
  useEffect(() => {
    setUserWidth(document.body.clientWidth); // Re-render now that you know the real height
    // const patches = [...Patchs]; // kopie původních Patchs

    // patches.sort(() => Math.random() - 0.5); // náhodné seřazení látek
    // const indexOf0_0 = patches.findIndex((x) => x.id === '0_0'); // naleznutí indexu 0_0
    // //console.log(indexOf0_0);

    // arraymove(patches, indexOf0_0); // posunutí 0_0 nakonec
    // console.log(patches.findIndex((x) => x.id === '0_0'));
    // setPatchesMixed(patches);
  }, []);

  const xPossition =  (
    state.selectedPatchId === patch.id
              ? {
                  x: 
                    state.x +
                    state.points[index][0] +
                    (state.selectedPatchPosition.x - state.x)
                
                }
              : {
                  x:state.x + state.points[index][0],
                }
  )
  
return (
    <>
      {state.patchesMixed.map((patch, index) => (
        <motion.svg
          key={patch.id}
          xmlns="http://www.w3.org/2000/svg"
          animate={
            state.selectedPatchId === patch.id
              ? {
                  y: `${
                    state.y +
                    state.points[index][1] +
                    (state.selectedPatchPosition.y - state.y)
                  }px`,
                  x: `${
                    state.x +
                    state.points[index][0] +
                    (state.selectedPatchPosition.x - state.x)
                  }px`,
                  position: 'absolute',
                  zIndex: 1001, // Posunutí vybrané látky nad ostatní
                }
              : {
                  y: `${state.y + state.points[index][1]}px`,
                  x: `${state.x + state.points[index][0]}px`,
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
              patchOffset: offset,
              patchX: ,
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
