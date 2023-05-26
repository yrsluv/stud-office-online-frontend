import React, { useEffect, useState } from 'react';
import './styles.scss';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

export const AuthPage = () => {
  return (
    <>
      <div className="authModal__container">
        <div className="authModal__fields">
          <div className="authModal__field">
            <Input placeholder="Введите ваш e-mail" />
          </div>
          <div className="authModal__field">
            <span>E-mail </span>
            <Input.Password
              placeholder="Введите ваш пароль"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </div>
        </div>

        <div className="authModal__buttonContainer">
          <Button className="authModal__button" type="primary">
            Войти
          </Button>
        </div>
      </div>
    </>
  );
};
