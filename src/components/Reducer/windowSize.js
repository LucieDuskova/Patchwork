export const distributePointsOnEllipse = (a, b, numPoints) => {
  const points = [];

  // fce na vytvoření 33 pozic pro patch
  for (let i = 0; i < numPoints; i++) {
    const theta = (2 * Math.PI * i) / numPoints;
    const x = a * Math.sin(theta);
    const y = b * Math.cos(theta);
    points.push([parseInt(x), parseInt(y)]);
  }

  const starOfEllipse = points[numPoints - 1];
  points.splice(numPoints - 1, 0);
  points.splice(0, 0, starOfEllipse);

  return points;
};

export const WindowSize = (state, action) => {
  return {
    ...state,
    x: action.windowWidth / 2 - 57,
    y: action.windowHeight / 4 + 40,
    sizeBoxTimer: action.windowWidth / 70,
    windowHeight: action.windowWidth / 70,
    points: distributePointsOnEllipse(
      action.windowWidth / 2.4,
      action.windowHeight / 4.4,
      33,
    ),

    player1: {
      ...state.player1,
      gameBoard: {
        width: (action.windowWidth / 70) * 9,
        left: 50,
        top:
          action.windowHeight -
          (action.windowWidth / 70) * 9 -
          (action.windowWidth / 70) * 9 * 0.75,
      },
    },
    player2: {
      ...state.player2,
      gameBoard: {
        width: (action.windowWidth / 70) * 9,
        left: action.windowWidth - (action.windowWidth / 70) * 9 - 50,
        top: action.windowHeight - 425,
      },
    },
  };
};
