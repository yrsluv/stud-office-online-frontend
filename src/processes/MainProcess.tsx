import { Route, Routes } from 'react-router-dom';

const MainProcess = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<>PageNotFound</>} />
      </Routes>
    </>
  );
};
export default MainProcess;
