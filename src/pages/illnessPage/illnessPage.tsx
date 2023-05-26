import './styles.scss';
import { Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

export const IllnessPage = () => {
  return (
    <main>
      <div className="service__wrapper">
        <h1 className="h1 colorBlue">Отправка справки о заболевании</h1>
        <Dragger>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Нажмите или перетащите файл в эту область для загрузки</p>
          {/* <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from uploading company data or
            other banned files.
          </p> */}
        </Dragger>
        <Button className="consultation__button button longRegular" type="primary">
          Отправить справку
        </Button>
        <p className={`authModal__errorAlert colorRed paragraph  active`}>
          Прикрепите скан справки о заболевании
        </p>
      </div>
    </main>
  );
};
