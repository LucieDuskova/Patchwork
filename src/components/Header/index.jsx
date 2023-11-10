import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <header>
      <div>
        <h1>Patchwork</h1>
      </div>
      <nav>
        <Link to="/">Homepage</Link>
        <span> | </span>
        <Link to="/pravidla">Pravidla</Link>
        <span> | </span>
        <Link to="/hra">Začít hrát</Link>
        <span> | </span>
        <Link to="/kontakty">Kontakty</Link>
      </nav>
    </header>
  );
};
