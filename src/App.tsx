import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainProcess from './processes/MainProcess';
import LogInProcess from './processes/LogInProcess';
import useAuth from './hooks/useAuth';

function App() {
  const { auth } = useAuth();
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="*" element={auth ? <MainProcess /> : <Navigate to="/login" />} />
          <Route path="login" element={<LogInProcess />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
