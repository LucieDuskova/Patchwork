// import { Button, ButtonGroup } from '@geist-ui/core';
import './style.css';

export const GameMenu = () => {
  return (
    <>
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
    </>
  );
};
/*
      <div className="gameMenu">
        <ButtonGroup type="success-light">
          <Button className="gameMenu__button">O</Button>
          <Button className="gameMenu__button">&#9664;</Button>
          <Button className="gameMenu__button">&#9654;</Button>
          <Button className="gameMenu__button">O</Button>
        </ButtonGroup>
        <Button className="gameMenu__button">koupit látku</Button>
        <Button className="gameMenu__button">vynechat tah</Button>
      </div>*/
