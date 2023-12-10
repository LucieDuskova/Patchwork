import linda from './img/Linda.jpg';
import lucie from './img/Lucie_Duskova.jpeg';
import game from './img/Patchwork.png';

export const Lucie = () => {
  return (
    <img
      src={lucie}
      className="contactPage__img contactPage__Lucka-img"
      alt="Lucie Dušková"
      style={{ marginLeft: 'auto', marginRight: 'auto' }}
    />
  );
};

export const Linda = () => {
  return (
    <img
      src={linda}
      className="contactPage__img contactPage__Linda-img"
      alt="Linda Hrdinová"
      style={{ marginLeft: 'auto', marginRight: 'auto' }}
    />
  );
};

export const Game = () => {
  return <img src={game} className="projectImg" alt="herní plán Patchwork" />;
};
