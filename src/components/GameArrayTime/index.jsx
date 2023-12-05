import './style.css';
import { motion } from 'framer-motion';
import { timeArray } from '../FunctionsGame';
import { DecorButton } from '../Button';

export const GameArrayTime = ({ state }) => {
  const arrayGrid = [];

  for (let i = 0; i < 8; i++) {
    const row = [];

    for (let j = 0; j < 8; j++) {
      row.push({});
    }

    arrayGrid.push(row);
  }
  const score = state.timeArray;

  arrayGrid[0][0] = score[0];
  arrayGrid[1][0] = score[1];
  arrayGrid[2][0] = score[2];
  arrayGrid[3][0] = score[3];
  arrayGrid[4][0] = score[4];
  arrayGrid[5][0] = score[5];
  arrayGrid[6][0] = score[6];
  arrayGrid[7][0] = score[7];
  arrayGrid[7][1] = score[8];
  arrayGrid[7][2] = score[9];
  arrayGrid[7][3] = score[10];
  arrayGrid[7][4] = score[11];
  arrayGrid[7][5] = score[12];
  arrayGrid[7][6] = score[13];
  arrayGrid[7][7] = score[14];
  arrayGrid[6][7] = score[15];
  arrayGrid[5][7] = score[16];
  arrayGrid[4][7] = score[17];
  arrayGrid[3][7] = score[18];
  arrayGrid[2][7] = score[19];
  arrayGrid[1][7] = score[20];
  arrayGrid[0][7] = score[21];
  arrayGrid[0][6] = score[22];
  arrayGrid[0][5] = score[23];
  arrayGrid[0][4] = score[24];
  arrayGrid[0][3] = score[25];
  arrayGrid[0][2] = score[26];
  arrayGrid[0][1] = score[27];
  arrayGrid[1][1] = score[28];
  arrayGrid[2][1] = score[29];
  arrayGrid[3][1] = score[30];
  arrayGrid[4][1] = score[31];
  arrayGrid[5][1] = score[32];
  arrayGrid[6][1] = score[33];
  arrayGrid[6][2] = score[34];
  arrayGrid[6][3] = score[35];
  arrayGrid[6][4] = score[36];
  arrayGrid[6][5] = score[37];
  arrayGrid[6][6] = score[38];
  arrayGrid[5][6] = score[39];
  arrayGrid[4][6] = score[40];
  arrayGrid[3][6] = score[41];
  arrayGrid[2][6] = score[42];
  arrayGrid[1][6] = score[43];
  arrayGrid[1][5] = score[44];
  arrayGrid[1][4] = score[45];
  arrayGrid[1][3] = score[46];
  arrayGrid[1][2] = score[47];
  arrayGrid[2][2] = score[48];
  arrayGrid[3][2] = score[49];
  arrayGrid[4][2] = score[50];
  arrayGrid[5][2] = score[51];
  arrayGrid[5][3] = score[52];
  arrayGrid[5][4] = score[53];
  arrayGrid[5][5] = score[54];
  arrayGrid[4][5] = score[55];
  arrayGrid[3][5] = score[56];
  arrayGrid[2][5] = score[57];
  arrayGrid[2][4] = score[58];
  arrayGrid[2][3] = score[59];
  arrayGrid[3][3] = score[60];
  arrayGrid[4][3] = score[61];
  arrayGrid[4][4] = score[62];
  arrayGrid[3][4] = score[63];

  return (
    <>
      <div className="gameArrayTime">
        <div className="gameArrayTime__array">
          <motion.div
            className="figures_1"
            animate={{
              position: 'absolute',
              y: score[state.player1.score].top,
              x: score[state.player1.score].left,
            }}
          ></motion.div>

          <motion.div
            className="figures_2"
            animate={{
              position: 'absolute',
              y: score[state.player2.score].top,
              x: score[state.player2.score].left,
            }}
          ></motion.div>

          {arrayGrid.map((row, rowIndex) => (
            <div key={rowIndex} className={`gameArrayTime__row-${rowIndex}`}>
              {row.map((cell, Index) => (
                <div
                  key={Index}
                  className={`gameArrayTime__cell-${Index}`}
                  style={{
                    backgroundColor: cell.color,
                    backgroundImage: cell.button
                      ? './url(../public/favicon.ico)'
                      : '',
                    width: '37.2px',
                    height: '37.2px',
                    borderWidth: cell.borderWidth,
                    borderStyle: 'solid',
                    borderColor: '#000000',
                  }}
                >
                  {cell.button ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox={DecorButton.viewBox}
                      width={`34px`}
                    >
                      <g>
                        <path
                          d={DecorButton.svg}
                          fill={DecorButton.color}
                          stroke="#000000"
                          strokeWidth="0.15"
                        />
                      </g>
                    </svg>
                  ) : null}
                  {'   '}
                  {/* {cell.text} */}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
