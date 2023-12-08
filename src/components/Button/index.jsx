export const buttonData = {
  svg: 'M 2.5 5 L 2.5 5 A 0.125 0.125 90 0 0 2.5 0 A 0.125 0.125 90 0 0 2.5 5 M 2.5 0.625 A 0.125 0.125 90 0 1 2.5 4.375 A 0.125 0.125 90 0 1 2.5 0.625 A 0.125 0.125 90 0 0 2.5 0.625 M 2.5 0.75 A 0.125 0.125 90 0 0 2.5 4.25 A 0.125 0.125 90 0 0 2.5 0.75 M 1.875 1.625 A 0.125 0.125 90 0 1 1.875 2.25 A 0.125 0.125 90 0 1 1.875 1.625 M 1.875 2.75 A 0.125 0.125 90 0 1 1.875 3.375 A 0.125 0.125 90 0 1 1.875 2.75 M 3.125 2.75 A 0.125 0.125 90 0 1 3.125 3.375 A 0.125 0.125 90 0 1 3.125 2.75 M 3.125 1.625 A 0.125 0.125 90 0 1 3.125 2.25 A 0.125 0.125 90 0 1 3.125 1.625',
  viewBox: '0 0 5.2 5.2',
  pattern: '',
  color: '#6F5084', //fialová
};
export const DecorButton = ({ sizeBoxTimer, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={buttonData.viewBox}
      width={`${sizeBoxTimer * size}px`}
      height={`${sizeBoxTimer * size}px`}
    >
      <g>
        <path
          d={buttonData.svg}
          fill={buttonData.color}
          stroke="#000000"
          strokeWidth="0.15"
        />
      </g>
    </svg>
  );
};
