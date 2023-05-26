import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StudyCert from '../pages/main/StudyCertPage';

const MainProcess = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<>PageNotFound</>} />
        <Route path="service">
          <Route path="study-cert" element={<StudyCert />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};
export default MainProcess;
