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

  score[0] = { color: '#ff0000', text: '0' };
  score[1] = { color: '#ff0000', text: '1' };
  score[2] = { color: '#ff0000', text: '2' };
  score[3] = { color: '#f39c12', text: '3' };
  score[4] = { color: '#f39c12', text: '4' };
  score[5] = { color: '#f39c12', text: '5' };
  score[6] = { color: '#f39c12', text: '6' };
  score[7] = { button: true, color: '#3498db', text: '7' };
  score[8] = { color: '#f39c12', text: '8' };
  score[9] = { color: '#f39c12', text: '9' };
  score[10] = { color: '#f39c12', text: '10' };
  score[11] = { color: '#f39c12', text: '11' };
  score[12] = { color: '#f39c12', text: '12' };
  score[13] = { button: true, color: '#3498db', text: '13' };
  score[14] = { color: '#f39c12', text: '14' };
  score[15] = { color: '#f39c12', text: '15' };
  score[16] = { color: '#f39c12', text: '16' };
  score[17] = { color: '#f39c12', text: '17' };
  score[18] = { color: '#f39c12', text: '18' };
  score[19] = { button: true, color: '#3498db', text: '19' };
  score[20] = { color: '#f39c12', text: '20' };
  score[21] = { color: '#f39c12', text: '21' };
  score[22] = { patch: true, color: '#8B4513', text: '22' };
  score[23] = { color: '#f39c12', text: '23' };
  score[24] = { color: '#f39c12', text: '24' };
  score[25] = { color: '#f39c12', text: '25' };
  score[26] = { button: true, color: '#3498db', text: '26' };
  score[27] = { color: '#f39c12', text: '27' };
  score[28] = { color: '#f39c12', text: '28' };
  score[29] = { patch: true, color: '#8B4513', text: '29' };
  score[30] = { color: '#f39c12', text: '30' };
  score[31] = { color: '#f39c12', text: '31' };
  score[32] = { color: '#f39c12', text: '32' };
  score[33] = { button: true, color: '#3498db', text: '33' };
  score[34] = { color: '#f39c12', text: '34' };
  score[35] = { color: '#f39c12', text: '35' };
  score[36] = { patch: true, color: '#8B4513', text: '36' };
  score[37] = { color: '#f39c12', text: '37' };
  score[38] = { color: '#f39c12', text: '38' };
  score[39] = { color: '#f39c12', text: '39' };
  score[40] = { button: true, color: '#3498db', text: '40' };
  score[41] = { color: '#f39c12', text: '41' };
  score[42] = { color: '#f39c12', text: '42' };
  score[43] = { color: '#f39c12', text: '43' };
  score[44] = { color: '#f39c12', text: '44' };
  score[45] = { color: '#f39c12', text: '45' };
  score[46] = { button: true, color: '#3498db', text: '46' };
  score[47] = { color: '#f39c12', text: '47' };
  score[48] = { color: '#f39c12', text: '48' };
  score[49] = { patch: true, color: '#8B4513', text: '49' };
  score[50] = { color: '#f39c12', text: '50' };
  score[51] = { color: '#f39c12', text: '51' };
  score[52] = { color: '#f39c12', text: '52' };
  score[53] = { button: true, color: '#3498db', text: '53' };
  score[54] = { color: '#f39c12', text: '54' };
  score[55] = { color: '#f39c12', text: '55' };
  score[56] = { patch: true, color: '#8B4513', text: '56' };
  score[57] = { color: '#f39c12', text: '57' };
  score[58] = { color: '#f39c12', text: '58' };
  score[59] = { color: '#f39c12', text: '59' };
  score[60] = { button: true, color: '#3498db', text: '60' };
  score[61] = { color: '#f39c12', text: '61' };
  score[62] = { color: '#f39c12', text: '62' };
  score[63] = { color: '#f39c12', text: '63' };

  arrayGrid[0][0] = score[0];
  arrayGrid[0][1] = score[1];
  arrayGrid[0][2] = score[2];
  arrayGrid[0][3] = score[3];
  arrayGrid[0][4] = score[4];
  arrayGrid[0][5] = score[5];
  arrayGrid[0][6] = score[6];
  arrayGrid[0][7] = score[7];
  arrayGrid[1][7] = score[8];
  arrayGrid[2][7] = score[9];
  arrayGrid[3][7] = score[10];
  arrayGrid[4][7] = score[11];
  arrayGrid[5][7] = score[12];
  arrayGrid[6][7] = score[13];
  arrayGrid[7][7] = score[14];
  arrayGrid[7][6] = score[15];
  arrayGrid[7][5] = score[16];
  arrayGrid[7][4] = score[17];
  arrayGrid[7][3] = score[18];
  arrayGrid[7][2] = score[19];
  arrayGrid[7][1] = score[20];
  arrayGrid[7][0] = score[21];
  arrayGrid[6][0] = score[22];
  arrayGrid[5][0] = score[23];
  arrayGrid[4][0] = score[24];
  arrayGrid[3][0] = score[25];
  arrayGrid[2][0] = score[26];
  arrayGrid[1][0] = score[27];
  arrayGrid[1][1] = score[28];
  arrayGrid[1][2] = score[29];
  arrayGrid[1][3] = score[30];
  arrayGrid[1][4] = score[31];
  arrayGrid[1][5] = score[32];
  arrayGrid[1][6] = score[33];
  arrayGrid[2][6] = score[34];
  arrayGrid[3][6] = score[35];
  arrayGrid[4][6] = score[36];
  arrayGrid[5][6] = score[37];
  arrayGrid[6][6] = score[38];
  arrayGrid[6][5] = score[39];
  arrayGrid[6][4] = score[40];
  arrayGrid[6][3] = score[41];
  arrayGrid[6][2] = score[42];
  arrayGrid[6][1] = score[43];
  arrayGrid[5][1] = score[44];
  arrayGrid[4][1] = score[45];
  arrayGrid[3][1] = score[46];
  arrayGrid[2][1] = score[47];
  arrayGrid[2][2] = score[48];
  arrayGrid[2][3] = score[49];
  arrayGrid[2][4] = score[50];
  arrayGrid[2][5] = score[51];
  arrayGrid[3][5] = score[52];
  arrayGrid[4][5] = score[53];
  arrayGrid[5][5] = score[54];
  arrayGrid[5][4] = score[55];
  arrayGrid[5][3] = score[56];
  arrayGrid[5][2] = score[57];
  arrayGrid[4][2] = score[58];
  arrayGrid[3][2] = score[59];
  arrayGrid[3][3] = score[60];
  arrayGrid[3][4] = score[61];
  arrayGrid[4][4] = score[62];
  arrayGrid[4][3] = score[63];

  score.forEach((item, index) => {
    const row = Math.floor(index / 8);
    const col = index % 8;
    arrayGrid[row][col] = item;
  });

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
                  backgroundColor: cell.color || 'blue',
                  width: '37.2px',
                  height: '37.2px',
                }}
              >
                {' '}
                {cell.text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
