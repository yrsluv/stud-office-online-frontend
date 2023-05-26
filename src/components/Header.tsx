import './Header.scss';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as LogOutIcon } from '../assets/sign-out-icon.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <div className="header">
      <header className="header__content">
        <Logo />
        <Nav />
        <button className="header__logOutButton">
          <LogOutIcon />
          Выход
        </button>
      </header>
    </div>
  );
};
export default Header;
