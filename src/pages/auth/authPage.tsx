import { useState } from 'react';
import './styles.scss';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import { Role } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

type ResponseData = {
  id: number;
  role: Role;
  accessToken: string;
  refreshToken: string;
};

export const AuthPage = () => {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post<ResponseData>('/Tokens', { email, password });
      setAuth({
        email,
        id: response.data.id,
        role: response.data.role,
        accessToken: response.data.accessToken,
      });
      setError(false);
      navigate('/');
    } catch {
      setError(true);
    }
  };

  return (
    <main role="main">
      <div className="authPage__wrapper">
        <div className="authPage">
          <div className="authLogos">
            <Logo />
            <span className="h3">Личный кабинет студента</span>
          </div>
          <form className="authModal__container">
            <div className="authModal__fields colorGray">
              <div className="authModal__field">
                <span className="authModal__label longRegular">E-mail:</span>
                <Input
                  placeholder="Введите ваш e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  status={error ? 'error' : undefined}
                />
              </div>
              <div className="authModal__field">
                <span className="authModal__label longRegular">Пароль:</span>
                <Input.Password
                  placeholder="Введите ваш пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  status={error ? 'error' : undefined}
                />
              </div>
            </div>

            <div className="authModal__buttonContainer">
              <Button
                className="authModal__button longRegular"
                type="primary"
                onClick={handleSubmit}
              >
                Войти
              </Button>
              <p className={`authModal__errorAlert colorRed p-small ${error && 'active'}`}>
                Неверный логин или пароль
              </p>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </main>
  );
};
