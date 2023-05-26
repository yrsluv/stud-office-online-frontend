import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
<<<<<<< HEAD
=======
import Footer from '../components/Footer';
>>>>>>> 0b88540a54d109aebf575129e806c258d72b2556

const MainProcess = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<>PageNotFound</>} />
      </Routes>
      <Footer />
    </>
  );
};
export default MainProcess;
