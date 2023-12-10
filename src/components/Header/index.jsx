import { Link } from 'react-router-dom';
import './style.css';

export const Header = ({ dispatch }) => {
  return (
    <header>
      <div>
        <h1>Patchwork</h1>
      </div>
      <nav className="header__nav">
        <Link className="header__nav-link" to="/">
          Domů
        </Link>
        <span className="header__nav-space"> | </span>
        <Link className="header__nav-link" to="/pravidla">
          Pravidla
        </Link>
        <span className="header__nav-space"> | </span>
        <Link
          className="header__nav-link"
          to="/hra"
          onClick={() => dispatch({ type: 'NEW_GAME' })}
        >
          Začít hrát
        </Link>
        <span className="header__nav-space"> | </span>
        <Link className="header__nav-link" to="/kontakty">
          Kontakty
        </Link>
      </nav>
    </header>
  );
};
