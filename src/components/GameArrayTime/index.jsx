import './style.css';

export const GameArrayTime = () => {

  const arrayGrid = [];

  for (let i = 0; i < 8; i++) {
    const row = [];

    for (let j = 0; j < 8; j++) {
      row.push(<div key={`${i}_${j}`} className={`gameArrayTime__array-one gameArrayTime__array-one-${i}_${j}`}></div>);
    }

    arrayGrid.push(row);
    console.log(row[0, 1])
  }

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

// export const GameArrayTime = () => {
//   return (
//     <div className="gameArrayTime">
//       <div className="gameArrayTime__array">
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//         <div className="gameArrayTime__array-one"></div>{' '}
//       </div>
//     </div>
//   );
// };
