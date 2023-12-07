import './style.css';

export const changePlayer = (player1Score, player2Score, currentPlayer) => {
  let newPlayer = '';
  if (player1Score < player2Score) {
    newPlayer = 'player1';
    return newPlayer;
  } else if (player2Score < player1Score) {
    newPlayer = 'player2';
    return newPlayer;
  } else {
    return currentPlayer;
  }
};

export const timeArray = (sizeBoxTimmer, edgeTimmer) => {
  const score = [];
  for (let i = 0; i < 64; i++) {
    score.push({});
  }

  score[0] = {
    top: 0 * sizeBoxTimmer + edgeTimmer,
    left: 0 * sizeBoxTimmer + edgeTimmer,
    color: '#ff0000',
    text: '0',
    borderWidth: '4px 1px 1px 4px',
  };
  score[1] = {
    top: 0 * sizeBoxTimmer + edgeTimmer,
    left: 1 * sizeBoxTimmer + edgeTimmer,
    color: '#ff0000',
    text: '1',
    borderWidth: '4px 1px 1px 1px',
  };
  score[2] = {
    top: 0 * sizeBoxTimmer + edgeTimmer,
    left: 2 * sizeBoxTimmer + edgeTimmer,
    color: '#ff0000',
    text: '2',
    borderWidth: '4px 1px 1px 1px',
  };
  score[3] = {
    top: 0 * sizeBoxTimmer + edgeTimmer,
    left: 3 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '3',
    borderWidth: '4px 1px 1px 1px',
  };
  score[4] = {
    top: 0 * sizeBoxTimmer + edgeTimmer,
    left: 4 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '4',
    borderWidth: '4px 1px 1px 1px',
  };
  score[5] = {
    top: 0 * sizeBoxTimmer + edgeTimmer,
    left: 5 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '5',
    borderWidth: '4px 1px 1px 1px',
  };
  score[6] = {
    top: 0 * sizeBoxTimmer + edgeTimmer,
    left: 6 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '6',
    borderWidth: '4px 1px 1px 1px',
  };
  score[7] = {
    top: 0 * sizeBoxTimmer + edgeTimmer,
    left: 7 * sizeBoxTimmer + edgeTimmer,
    button: true,
    color: '#ffc43b',
    text: '7',
    borderWidth: '4px 4px 1px 1px',
  };
  score[8] = {
    top: 1 * sizeBoxTimmer + edgeTimmer,
    left: 7 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '8',
    borderWidth: '1px 4px 1px 1px',
  };
  score[9] = {
    top: 2 * sizeBoxTimmer + edgeTimmer,
    left: 7 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '9',
    borderWidth: '1px 4px 1px 1px',
  };
  score[10] = {
    top: 3 * sizeBoxTimmer + edgeTimmer,
    left: 7 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '10',
    borderWidth: '1px 4px 1px 1px',
  };
  score[11] = {
    top: 4 * sizeBoxTimmer + edgeTimmer,
    left: 7 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '11',
    borderWidth: '1px 4px 1px 1px',
  };
  score[12] = {
    top: 5 * sizeBoxTimmer + edgeTimmer,
    left: 7 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '12',
    borderWidth: '1px 4px 1px 1px',
  };
  score[13] = {
    top: 6 * sizeBoxTimmer + edgeTimmer,
    left: 7 * sizeBoxTimmer + edgeTimmer,
    button: true,
    color: '#ffc43b',
    text: '13',
    borderWidth: '1px 4px 1px 1px',
  };
  score[14] = {
    top: 7 * sizeBoxTimmer + edgeTimmer,
    left: 7 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '14',
    borderWidth: '1px 4px 4px 1px',
  };
  score[15] = {
    top: 7 * sizeBoxTimmer + edgeTimmer,
    left: 6 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '15',
    borderWidth: '1px 1px 4px 1px',
  };
  score[16] = {
    top: 7 * sizeBoxTimmer + edgeTimmer,
    left: 5 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '16',
    borderWidth: '1px 1px 4px 1px',
  };
  score[17] = {
    top: 7 * sizeBoxTimmer + edgeTimmer,
    left: 4 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '17',
    borderWidth: '1px 1px 4px 1px',
  };
  score[18] = {
    top: 7 * sizeBoxTimmer + edgeTimmer,
    left: 3 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '18',
    borderWidth: '1px 1px 4px 1px',
  };
  score[19] = {
    top: 7 * sizeBoxTimmer + edgeTimmer,
    left: 2 * sizeBoxTimmer + edgeTimmer,
    button: true,
    color: '#ffc43b',
    text: '19',
    borderWidth: '1px 1px 4px 1px',
  };
  score[20] = {
    top: 7 * sizeBoxTimmer + edgeTimmer,
    left: 1 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '20',
    borderWidth: '1px 1px 4px 1px',
  };
  score[21] = {
    top: 7 * sizeBoxTimmer + edgeTimmer,
    left: 0 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '21',
    borderWidth: '1px 1px 4px 4px',
  };
  score[22] = {
    top: 6 * sizeBoxTimmer + edgeTimmer,
    left: 0 * sizeBoxTimmer + edgeTimmer,
    patch: true,
    color: '#8B4513',
    text: '22',
    borderWidth: '1px 1px 1px 4px',
  };
  score[23] = {
    top: 5 * sizeBoxTimmer + edgeTimmer,
    left: 0 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '23',
    borderWidth: '1px 1px 1px 4px',
  };
  score[24] = {
    top: 4 * sizeBoxTimmer + edgeTimmer,
    left: 0 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '24',
    borderWidth: '1px 1px 1px 4px',
  };
  score[25] = {
    top: 3 * sizeBoxTimmer + edgeTimmer,
    left: 0 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '25',
    borderWidth: '1px 1px 1px 4px',
  };
  score[26] = {
    top: 2 * sizeBoxTimmer + edgeTimmer,
    left: 0 * sizeBoxTimmer + edgeTimmer,
    button: true,
    color: '#ffc43b',
    text: '26',
    borderWidth: '1px 1px 1px 4px',
  };
  score[27] = {
    top: 1 * sizeBoxTimmer + edgeTimmer,
    left: 0 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '27',
    borderWidth: '4px 1px 1px 4px',
  };
  score[28] = {
    top: 1 * sizeBoxTimmer + edgeTimmer,
    left: 1 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    color: '#ffc43a',
    text: '28',
    borderWidth: '4px 1px 1px 1px',
  };
  score[29] = {
    top: 1 * sizeBoxTimmer + edgeTimmer,
    left: 2 * sizeBoxTimmer + edgeTimmer,
    patch: true,
    color: '#8B4513',
    text: '29',
    borderWidth: '4px 1px 1px 1px',
  };
  score[30] = {
    top: 1 * sizeBoxTimmer + edgeTimmer,
    left: 3 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '30',
    borderWidth: '4px 1px 1px 1px',
  };
  score[31] = {
    top: 1 * sizeBoxTimmer + edgeTimmer,
    left: 4 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '31',
    borderWidth: '4px 1px 1px 1px',
  };
  score[32] = {
    top: 1 * sizeBoxTimmer + edgeTimmer,
    left: 5 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '32',
    borderWidth: '4px 1px 1px 1px',
  };
  score[33] = {
    top: 1 * sizeBoxTimmer + edgeTimmer,
    left: 6 * sizeBoxTimmer + edgeTimmer,
    button: true,
    color: '#ffc43b',
    text: '33',
    borderWidth: '4px 4px 1px 1px',
  };
  score[34] = {
    top: 2 * sizeBoxTimmer + edgeTimmer,
    left: 6 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '34',
    borderWidth: '1px 4px 1px 1px',
  };
  score[35] = {
    top: 3 * sizeBoxTimmer + edgeTimmer,
    left: 6 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '35',
    borderWidth: '1px 4px 1px 1px',
  };
  score[36] = {
    top: 4 * sizeBoxTimmer + edgeTimmer,
    left: 6 * sizeBoxTimmer + edgeTimmer,
    patch: true,
    color: '#8B4513',
    text: '36',
    borderWidth: '1px 4px 1px 1px',
  };
  score[37] = {
    top: 5 * sizeBoxTimmer + edgeTimmer,
    left: 6 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '37',
    borderWidth: '1px 4px 1px 1px',
  };
  score[38] = {
    top: 6 * sizeBoxTimmer + edgeTimmer,
    left: 6 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '38',
    borderWidth: '1px 4px 4px 1px',
  };
  score[39] = {
    top: 6 * sizeBoxTimmer + edgeTimmer,
    left: 5 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '39',
    borderWidth: '1px 1px 4px 1px',
  };
  score[40] = {
    top: 6 * sizeBoxTimmer + edgeTimmer,
    left: 4 * sizeBoxTimmer + edgeTimmer,
    button: true,
    color: '#ffc43b',
    text: '40',
    borderWidth: '1px 1px 4px 1px',
  };
  score[41] = {
    top: 6 * sizeBoxTimmer + edgeTimmer,
    left: 3 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '41',
    borderWidth: '1px 1px 4px 1px',
  };
  score[42] = {
    top: 6 * sizeBoxTimmer + edgeTimmer,
    left: 2 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '42',
    borderWidth: '1px 1px 4px 1px',
  };
  score[43] = {
    top: 6 * sizeBoxTimmer + edgeTimmer,
    left: 1 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '43',
    borderWidth: '1px 1px 4px 4px',
  };
  score[44] = {
    top: 5 * sizeBoxTimmer + edgeTimmer,
    left: 1 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '44',
    borderWidth: '1px 1px 1px 4px',
  };
  score[45] = {
    top: 4 * sizeBoxTimmer + edgeTimmer,
    left: 1 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '45',
    borderWidth: '1px 1px 1px 4px',
  };
  score[46] = {
    top: 3 * sizeBoxTimmer + edgeTimmer,
    left: 1 * sizeBoxTimmer + edgeTimmer,
    button: true,
    color: '#ffc43b',
    text: '46',
    borderWidth: '1px 1px 1px 4px',
  };
  score[47] = {
    top: 2 * sizeBoxTimmer + edgeTimmer,
    left: 1 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '47',
    borderWidth: '4px 1px 1px 4px',
  };
  score[48] = {
    top: 2 * sizeBoxTimmer + edgeTimmer,
    left: 2 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '48',
    borderWidth: '4px 1px 1px 1px',
  };
  score[49] = {
    top: 2 * sizeBoxTimmer + edgeTimmer,
    left: 3 * sizeBoxTimmer + edgeTimmer,
    patch: true,
    color: '#8B4513',
    text: '49',
    borderWidth: '4px 1px 1px 1px',
  };
  score[50] = {
    top: 2 * sizeBoxTimmer + edgeTimmer,
    left: 4 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '50',
    borderWidth: '4px 1px 1px 1px',
  };
  score[51] = {
    top: 2 * sizeBoxTimmer + edgeTimmer,
    left: 5 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '51',
    borderWidth: '4px 4px 1px 1px',
  };
  score[52] = {
    top: 3 * sizeBoxTimmer + edgeTimmer,
    left: 5 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '52',
    borderWidth: '1px 4px 1px 1px',
  };
  score[53] = {
    top: 4 * sizeBoxTimmer + edgeTimmer,
    left: 5 * sizeBoxTimmer + edgeTimmer,
    button: true,
    color: '#ffc43b',
    text: '53',
    borderWidth: '1px 4px 1px 1px',
  };
  score[54] = {
    top: 5 * sizeBoxTimmer + edgeTimmer,
    left: 5 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '54',
    borderWidth: '1px 4px 4px 1px',
  };
  score[55] = {
    top: 5 * sizeBoxTimmer + edgeTimmer,
    left: 4 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '55',
    borderWidth: '1px 1px 4px 1px',
  };
  score[56] = {
    top: 5 * sizeBoxTimmer + edgeTimmer,
    left: 3 * sizeBoxTimmer + edgeTimmer,
    patch: true,
    color: '#8B4513',
    text: '56',
    borderWidth: '1px 1px 4px 1px',
  };
  score[57] = {
    top: 5 * sizeBoxTimmer + edgeTimmer,
    left: 2 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '57',
    borderWidth: '1px 1px 4px 4px',
  };
  score[58] = {
    top: 4 * sizeBoxTimmer + edgeTimmer,
    left: 2 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '58',
    borderWidth: '1px 1px 1px 4px',
  };
  score[59] = {
    top: 3 * sizeBoxTimmer + edgeTimmer,
    left: 2 * sizeBoxTimmer + edgeTimmer,
    color: '#ffc43a',
    text: '59',
    borderWidth: '4px 1px 1px 4px',
  };
  score[60] = {
    top: 3 * sizeBoxTimmer + edgeTimmer,
    left: 3 * sizeBoxTimmer + edgeTimmer,
    button: true,
    color: '#ff0000',
    text: '60',
    borderWidth: '4px 0px 0px 2px',
  };
  score[61] = {
    top: 3 * sizeBoxTimmer + edgeTimmer,
    left: 4 * sizeBoxTimmer + edgeTimmer,
    color: '#ff0000',
    text: '61',
    borderWidth: '4px 4px 0px 0px',
  };
  score[62] = {
    top: 4 * sizeBoxTimmer + edgeTimmer,
    left: 4 * sizeBoxTimmer + edgeTimmer,
    color: '#ff0000',
    text: '62',
    borderWidth: '0px 4px 4px 0px',
  };
  score[63] = {
    top: 4 * sizeBoxTimmer + edgeTimmer,
    left: 3 * sizeBoxTimmer + edgeTimmer,
    color: '#ff0000',
    text: '63',
    borderWidth: '0px 0px 4px 4px',
  };

  return score;
};

export const BoxForTable = ({ state }) => {
  return (
    <div
      className="boxForTable"
      style={{
        width:
          (state.x + state.points[1][0] - (state.x + state.points[0][0]) - 3) *
          3,
        height: 198,
        transform: `translateX(${
          state.x +
          state.points[1][0] +
          (state.x + state.points[0][0] - state.x + state.points[1][0]) -
          10
        }px) translateY(${state.y + state.points[1][1] - 15}px)`,
      }}
    ></div>
  );
};
