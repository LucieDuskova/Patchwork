import './style.css';

export const BoxForTable = ({ state }) => {
  return (
    <div
      className="boxForTable"
      style={{
        width:
          (state.x + state.points[1][0] - (state.x + state.points[0][0]) - 3) * 3,
        height: ((state.x + state.points[1][0] - (state.x + state.points[0][0]) - 3) * 3)*0.35,
        transform: `translateX(${
          state.x +
          state.points[1][0] +
          (state.x + state.points[0][0] - state.x + state.points[1][0]) -
          30
        }px) translateY(${state.y + state.points[1][1] - 15}px)`,
      }}
    ></div>
  );
};
