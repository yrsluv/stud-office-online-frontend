import './Header.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as LogOutIcon } from '../../assets/sign-out-icon.svg';
import Nav from '../Nav/Nav';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { setAuth } = useAuth();
  const handleLogOut = () => {
    setAuth(null);
  };

  return (
    <div className="header">
      <header className="header__content">
        <Logo className="logo" />
        <Nav />
        <div className="header__logOutButtonWrapper">
          <button className="header__logOutButton" onClick={handleLogOut}>
            <LogOutIcon />
            Выход
          </button>
        </div>
      </header>
    </div>
  );
};
export default Header;
