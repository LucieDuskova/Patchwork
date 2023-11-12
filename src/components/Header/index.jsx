import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <header>
      <div>
        <h1>Patchwork</h1>
      </div>
      <nav className='header__nav'>
        <Link className='header__nav-link'to="/">Domu</Link>
        <span> | </span>
        <Link className='header__nav-link' to="/pravidla">Pravidla</Link>
        <span> | </span>
        <Link className='header__nav-link' to="/hra">Začít hrát</Link>
        <span> | </span>
        <Link className='header__nav-link' to="/kontakty">Kontakty</Link>
      </nav>
    </header>
  );
};
