import { useState, createRef } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import jsPDF from 'jspdf';
import '../../assets/times-normal';
import '../../assets/times-bold';
import '../../assets/times-italic';
import '../../assets/times-bolditalic';

const StudyCertPage = () => {
  const [permissionError, setPermissionError] = useState<boolean>(false);
  const [pdfGenError, setPdfGenError] = useState<boolean>(false);

  const handleGetSudyCert = async () => {
    // TODO: get user data
    // set error
    try {
      const htmlResponse = await axios.get('/study-cert.html');
      console.log(htmlResponse.data);

      const doc = new jsPDF();
      doc.setLanguage('ru');
      doc.html(htmlResponse.data, {
        callback: (doc) => {
          doc.setLanguage('ru');
          doc.setFont('times', 'normal');
          doc.output('dataurlnewwindow');
        },
        windowWidth: 600,
        width: 180,
        x: 15,
        y: 10,
      });

      setPdfGenError(false);
    } catch {
      setPdfGenError(true);
    }
  };

  return (
    <main className="studyCertPage" role="main">
      <div className="studyCertPage__wrapper">
        <h1 className="h1 colorBlue">Запрос справки об обучении</h1>
        <Button type="primary" onClick={handleGetSudyCert}>
          Запросить справку об обучении
        </Button>

        {permissionError && <p className="colorRed p-small">Вы ещё/уже не учитесь в МИФИ</p>}
        {pdfGenError && <p className="colorRed p-small">Ошибка генерации справки</p>}
      </div>
    </main>
  );
};
export default StudyCertPage;
