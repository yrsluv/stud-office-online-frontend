import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ServicePage } from '../pages/servicePage/servicePage';
import StudyCertPage from '../pages/StudyCertificatePage/StudyCertPage';
import { ConsultationPage } from '../pages/сonsultationPage/consultationPage';
import { IllnessCertificatePage } from '../pages/IllnessCertificatePage/IllnessCertificatePage';
import { FeedPage } from '../pages/feedPage/feedPage';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import { StudentsPage } from '../pages/studentsPage/studenstPage';
import { AdminConsultationPage } from '../pages/AdminConsultationPage/AdminConsultationPage';
import { AddAnnouncementPage } from '../pages/addAnnouncement/addAnnouncementPage';

const MainProcess = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Navigate to="feed" />} />
        <Route path="feed" element={<FeedPage />} />
        <Route path="service">
          <Route index element={<ServicePage />} />
          <Route path="study-cert" element={<StudyCertPage />} />
          <Route path="consultation" element={<ConsultationPage />} />
          <Route path="illness" element={<IllnessCertificatePage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="schedule" element={<AdminConsultationPage />} />
          <Route path="addannouncement" element={<AddAnnouncementPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
export default MainProcess;
