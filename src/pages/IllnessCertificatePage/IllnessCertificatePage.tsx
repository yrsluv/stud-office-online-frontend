import './styles.scss';
import { Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { DraggerProps, RcFile } from 'antd/es/upload';
import { useState } from 'react';
import axios from '../../api/axios';

const { Dragger } = Upload;

export const IllnessCertificatePage = () => {
  const [error, setError] = useState(false);
  const [fileList, setFileList] = useState<RcFile[]>([]);

  const draggerProps: DraggerProps = {
    name: 'file',
    accept: '.pdf',
    multiple: false,
    showUploadList: {
      showDownloadIcon: false,
    },
    onRemove: () => {
      setFileList([]);
    },
    beforeUpload: (file) => {
      setFileList([file]);
      return false;
    },
    fileList,
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', fileList[0]);

    try {
      axios.post('/StudentDocuments', formData, { headers: { 'Content-Type': fileList[0].type } });
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <main>
      <div className="service__wrapper">
        <h1 className="h1 colorBlue">Отправка справки о заболевании</h1>
        <Dragger {...draggerProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Нажмите или перетащите файл в эту область для загрузки</p>
          {/* <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from uploading company data or
            other banned files.
          </p> */}
        </Dragger>
        <Button
          className="consultation__button button longRegular"
          type="primary"
          onClick={handleSubmit}
        >
          Отправить справку
        </Button>
        {fileList.length === 0 && (
          <p className="authModal__errorAlert colorRed paragraph">
            Прикрепите скан справки о заболевании
          </p>
        )}
        {error && (
          <p className="authModal__errorAlert colorRed paragraph">Ошибка отправки справки</p>
        )}
      </div>
    </main>
  );
};
