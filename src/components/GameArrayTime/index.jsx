import './style.css';

export const GameArrayTime = () => {
  const arrayGrid = [];

  for (let i = 0; i < 8; i++) {
    const row = [];

    for (let j = 0; j < 8; j++) {
      row.push({});
    }

    arrayGrid.push(row);
  }

  const score = [];
  for (let i = 0; i < 64; i++) {
    score.push({});
  }

  score[0] = {
    color: '#ff0000',
    text: '0',
    borderWidth: '4px 2px 4px 4px',
  };
  score[1] = {
    color: '#ff0000',
    text: '1',
    borderWidth: '4px 2px 4px 0px',
  };
  score[2] = {
    color: '#ff0000',
    text: '2',
    borderWidth: '4px 2px 4px 0px',
  };
  score[3] = {
    color: '#f39c12',
    text: '3',
    borderWidth: '4px 2px 4px 0px',
  };
  score[4] = {
    color: '#f39c12',
    text: '4',
    borderWidth: '4px 2px 4px 0px',
  };
  score[5] = {
    color: '#f39c12',
    text: '5',
    borderWidth: '4px 2px 4px 0px',
  };
  score[6] = {
    color: '#f39c12',
    text: '6',
    borderWidth: '4px 2px 4px 0px',
  };
  score[7] = {
    button: true,
    color: '#3498db',
    text: '7',
    borderWidth: '4px 4px 2px 0px',
  };
  score[8] = {
    color: '#f39c12',
    text: '8',
    borderWidth: '0px 4px 2px 4px',
  };
  score[9] = {
    color: '#f39c12',
    text: '9',
    borderWidth: '0px 4px 2px 4px',
  };
  score[10] = {
    color: '#f39c12',
    text: '10',
    borderWidth: '0px 4px 2px 4px',
  };
  score[11] = {
    color: '#f39c12',
    text: '11',
    borderWidth: '0px 4px 2px 4px',
  };
  score[12] = {
    color: '#f39c12',
    text: '12',
    borderWidth: '0px 4px 2px 4px',
  };
  score[13] = {
    button: true,
    color: '#3498db',
    text: '13',
    borderWidth: '0px 4px 2px 4px',
  };
  score[14] = {
    color: '#f39c12',
    text: '14',
    borderWidth: '0px 4px 4px 2px',
  };
  score[15] = {
    color: '#f39c12',
    text: '15',
    borderWidth: '4px 0px 4px 2px',
  };
  score[16] = {
    color: '#f39c12',
    text: '16',
    borderWidth: '4px 0px 4px 2px',
  };
  score[17] = {
    color: '#f39c12',
    text: '17',
    borderWidth: '4px 0px 4px 2px',
  };
  score[18] = {
    color: '#f39c12',
    text: '18',
    borderWidth: '4px 0px 4px 2px',
  };
  score[19] = {
    button: true,
    color: '#3498db',
    text: '19',
    borderWidth: '4px 0px 4px 2px',
  };
  score[20] = {
    color: '#f39c12',
    text: '20',
    borderWidth: '4px 0px 4px 2px',
  };
  score[21] = {
    color: '#f39c12',
    text: '21',
    borderWidth: '2px 0px 4px 4px',
  };
  score[22] = {
    patch: true,
    color: '#8B4513',
    text: '22',
    borderWidth: '2px 4px 0px 4px',
  };
  score[23] = {
    color: '#f39c12',
    text: '23',
    borderWidth: '2px 4px 0px 4px',
  };
  score[24] = {
    color: '#f39c12',
    text: '24',
    borderWidth: '2px 4px 0px 4px',
  };
  score[25] = {
    color: '#f39c12',
    text: '25',
    borderWidth: '2px 4px 0px 4px',
  };
  score[26] = {
    button: true,
    color: '#3498db',
    text: '26',
    borderWidth: '2px 4px 0px 4px',
  };
  score[27] = {
    color: '#f39c12',
    text: '27',
    borderWidth: '0px 2px 0px 4px',
  };
  score[28] = {
    color: '#f39c12',
    text: '28',
    borderWidth: '0px 2px 4px 0px',
  };
  score[29] = {
    patch: true,
    color: '#8B4513',
    text: '29',
    borderWidth: '0px 2px 4px 0px',
  };
  score[30] = {
    color: '#f39c12',
    text: '30',
    borderWidth: '0px 2px 4px 0px',
  };
  score[31] = {
    color: '#f39c12',
    text: '31',
    borderWidth: '0px 2px 4px 0px',
  };
  score[32] = {
    color: '#f39c12',
    text: '32',
    borderWidth: '0px 2px 4px 0px',
  };
  score[33] = {
    button: true,
    color: '#3498db',
    text: '33',
    borderWidth: '0px 0px 2px 0px',
  };
  score[34] = {
    color: '#f39c12',
    text: '34',
    borderWidth: '0px 0px 2px 4px',
  };
  score[35] = {
    color: '#f39c12',
    text: '35',
    borderWidth: '0px 0px 2px 4px',
  };
  score[36] = {
    patch: true,
    color: '#8B4513',
    text: '36',
    borderWidth: '0px 0px 2px 4px',
  };
  score[37] = {
    color: '#f39c12',
    text: '37',
    borderWidth: '0px 0px 2px 4px',
  };
  score[38] = {
    color: '#f39c12',
    text: '38',
    borderWidth: '0px 0px 0px 2px',
  };
  score[39] = {
    color: '#f39c12',
    text: '39',
    borderWidth: '4px 0px 0px 2px',
  };
  score[40] = {
    button: true,
    color: '#3498db',
    text: '40',
    borderWidth: '4px 0px 0px 2px',
  };
  score[41] = {
    color: '#f39c12',
    text: '41',
    borderWidth: '4px 0px 0px 2px',
  };
  score[42] = {
    color: '#f39c12',
    text: '42',
    borderWidth: '4px 0px 0px 2px',
  };
  score[43] = {
    color: '#f39c12',
    text: '43',
    borderWidth: '2px 0px 0px 0px',
  };
  score[44] = {
    color: '#f39c12',
    text: '44',
    borderWidth: '2px 4px 0px 0px',
  };
  score[45] = {
    color: '#f39c12',
    text: '45',
    borderWidth: '2px 4px 0px 0px',
  };
  score[46] = {
    button: true,
    color: '#3498db',
    text: '46',
    borderWidth: '2px 4px 0px 0px',
  };
  score[47] = {
    color: '#f39c12',
    text: '47',
    borderWidth: '0px 2px 0px 0px',
  };
  score[48] = {
    color: '#f39c12',
    text: '48',
    borderWidth: '0px 2px 4px 0px',
  };
  score[49] = {
    patch: true,
    color: '#8B4513',
    text: '49',
    borderWidth: '0px 2px 4px 0px',
  };
  score[50] = {
    color: '#f39c12',
    text: '50',
    borderWidth: '0px 2px 4px 0px',
  };
  score[51] = {
    color: '#f39c12',
    text: '51',
    borderWidth: '0px 0px 2px 0px',
  };
  score[52] = {
    color: '#f39c12',
    text: '52',
    borderWidth: '0px 0px 2px 4px',
  };
  score[53] = {
    button: true,
    color: '#3498db',
    text: '53',
        borderWidth: '0px 0px 2px 4px',
  };
  score[54] = {
    color: '#f39c12',
    text: '54',
    borderWidth: '0px 0px 0px 2px',
  };
  score[55] = {
    color: '#f39c12',
    text: '55',
    borderWidth: '4px 0px 0px 2px',
  };
  score[56] = {
    patch: true,
    color: '#8B4513',
    text: '56',
    borderWidth: '4px 0px 0px 2px',
  };
  score[57] = {
    color: '#f39c12',
    text: '57',
    borderWidth: '2px 0px 0px 0px',
  };
  score[58] = {
    color: '#f39c12',
    text: '58',
    borderWidth: '2px 4px 0px 0px',
  };
  score[59] = {
    color: '#f39c12',
    text: '59',
    borderWidth: '0px 2px 0px 0px',
  };
  score[60] = {
    button: true,
    color: '#3498db',
    text: '60',
    borderWidth: '0px 0px 0px 0px',
  };
  score[61] = {
    color: '#ff0000',
    text: '61',
    borderWidth: '0px 0px 0px 0px',
  };
  score[62] = {
    color: '#ff0000',
    text: '62',
    borderWidth: '0px 0px 0px 0px',
  };
  score[63] = {
    color: '#ff0000',
    text: '63',
    borderWidth: '0px 0px 0px 0px',
  };

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
    <div className="gameArrayTime">
      <div className="gameArrayTime__array">
        {arrayGrid.map((row, rowIndex) => (
          <div key={rowIndex} className={`gameArrayTime__row-${rowIndex}`}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`gameArrayTime__cell-${colIndex}`}
                style={{
                  backgroundColor: cell.color || '#f39c12',
                  width: '37.2px',
                  height: '37.2px',
                  borderWidth: cell.borderWidth,
                  borderStyle: 'solid',
                  borderColor: '#000000',
                  transform: 'translateY(0.5px)',
                  boxSizing: 'border-box',
                }}
              >
                {'   '}
                {cell.text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
