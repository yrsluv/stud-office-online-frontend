import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ServicePage } from '../pages/servicePage/servicePage';
import StudyCertPage from '../pages/main/StudyCertPage';
import { ConsultationPage } from '../pages/сonsultationPage/consultationPage';

const MainProcess = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<>PageNotFound</>} />
        <Route path="service">
          <Route index element={<ServicePage />} />
          <Route path="study-cert" element={<StudyCertPage />} />
          <Route path="consultation" element={<ConsultationPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};
export default MainProcess;
