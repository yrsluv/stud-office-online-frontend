import React, { useEffect, useState } from 'react';
import './styles.scss';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const AuthPage = () => {
  const [response, setResponse] = useState<boolean | null>(true);

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <>
      <div className="authPage">
        <div className="authLogos">
          <Logo />
          <span className="h3">Личный кабинет студента</span>
        </div>
        <form className="authModal__container">
          <div className="authModal__fields colorGray">
            <div className="authModal__field">
              <span className="authModal__label longRegular">E-mail </span>
              <Input placeholder="Введите ваш e-mail" status={response ? undefined : 'error'} />
            </div>
            <div className="authModal__field">
              <span className="authModal__label longRegular">Password</span>
              <Input.Password
                placeholder="Введите ваш пароль"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                status={response ? undefined : 'error'}
              />
            </div>
          </div>

          <div className="authModal__buttonContainer">
            <Button
              className="authModal__button longRegular"
              type="primary"
              onClick={() => {
                setResponse(false);
              }}
            >
              Войти
            </Button>
            <span className={`authModal__errorAlert colorRed p-small ${!response && 'active'}`}>
              Неверный логин или пароль
            </span>
          </div>
        </form>
      </div>
    </>
  );
};
