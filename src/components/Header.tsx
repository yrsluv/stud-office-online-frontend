import './Header.scss';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as LogOutIcon } from '../assets/sign-out-icon.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Nav />
      <button className="header__logOutButton">
        <LogOutIcon />
        Выход
      </button>
    </header>
  );
};
export default Header;
