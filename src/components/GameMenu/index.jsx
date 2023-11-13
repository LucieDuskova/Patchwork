import './style.css';

export const GameMenu = () => {
  return (
    <div className="gameMenu">
      <div className="gameMenu__button-rotation">
        <button className="gameMenu__button">O</button>
        <button className="gameMenu__button"> &#9664;</button>
        <button className="gameMenu__button">&#9654;</button>
        <button className="gameMenu__button">O</button>
      </div>
      <button className="gameMenu__button">koupit látku</button>
      <button className="gameMenu__button">vynechat tah</button>
    </div>
  );
};
