import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MainProcess from './processes/MainProcess';
import LogInProcess from './processes/LogInProcess';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<MainProcess />} />
        <Route path="login" element={<LogInProcess />} />
      </Routes>
    </div>
  );
}

export default App;
