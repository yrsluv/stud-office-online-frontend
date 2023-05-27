import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ServicePage } from '../pages/servicePage/servicePage';
import StudyCertPage from '../pages/StudyCertificatePage/StudyCertPage';
import { ConsultationPage } from '../pages/сonsultationPage/consultationPage';
import { IllnessPage } from '../pages/illnessPage/illnessPage';
import { FeedPage } from '../pages/feedPage/feedPage';

const MainProcess = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<>PageNotFound</>} />
        <Route path="feed" element={<FeedPage />} />
        <Route path="service">
          <Route index element={<ServicePage />} />
          <Route path="study-cert" element={<StudyCertPage />} />
          <Route path="consultation" element={<ConsultationPage />} />
          <Route path="illness" element={<IllnessPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};
export default MainProcess;
