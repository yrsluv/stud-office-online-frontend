import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';

const MainProcess = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<>PageNotFound</>} />
      </Routes>
    </>
  );
};
export default MainProcess;
