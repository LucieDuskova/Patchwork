import './style.css';

export const GameArrayTime = () => {
  const arrayGrid = [];

  for (let i = 0; i < 8; i++) {
    const row = [];

    for (let j = 0; j < 8; j++) {
      row.push({});
    }

    arrayGrid.push(row);
    console.log(row[(0, 1)]);
  }

  arrayGrid = [
    [{}, {}, {}, {}],
    [{}, {}, {}, {}],
    [{}, {}, {}, {}],
  ];

const score = []
for (let i = 0; i< 64; i++) {
  score.push({})
}

score[7] = {button: true}
score[13] = {button: true}
score[19] = {button: true}
score[22] = {patch: true}
score[26] = {button: true}
score[29] = {patch: true}
score[33] = {button: true}
score[36] = {patch: true}
score[40] = {button: true}
score[46] = {button: true}
score[49] = {patch: true}
score[53] = {button: true}
score[56] = {patch: true}
score[60] = {button: true}






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

  return (
    <div className="gameArrayTime">
      <div className="gameArrayTime__array">
        {arrayGrid.map((row, rowIndex) => (
          <div key={rowIndex} className={`gameArrayTime__row-${rowIndex}`}>
            {row}
          </div>
        ))}
      </div>
    </div>
  );
};
