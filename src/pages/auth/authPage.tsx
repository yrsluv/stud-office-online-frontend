import React, { useEffect, useState } from 'react';
import './styles.scss';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

export const AuthPage = () => {
  const [response, setResponse] = useState<boolean | null>(true);

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <>
      <form className="authModal__container">
        <div className="authModal__fields">
          <div className="authModal__field">
            <span className="authModal__label">E-mail </span>
            <Input placeholder="Введите ваш e-mail" status={response ? undefined : 'error'} />
          </div>
          <div className="authModal__field">
            <span className="authModal__label">Password</span>
            <Input.Password
              placeholder="Введите ваш пароль"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              status={response ? undefined : 'error'}
            />
          </div>
        </div>

        <div className="authModal__buttonContainer">
          <Button
            className="authModal__button"
            type="primary"
            onClick={() => {
              setResponse(false);
            }}
          >
            Войти
          </Button>
          {!response && (
            <span className="authModal__errorAlert colorRed">Неверный логин или пароль</span>
          )}
        </div>
      </form>
    </>
  );
};
