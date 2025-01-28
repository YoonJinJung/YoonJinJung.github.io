import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import JYPage from './pages/JYPage';
import TYPage from './pages/TYPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/jy' element={<JYPage />} />
        <Route path='/ty' element={<TYPage />} />
      </Routes>
    </Router>
  );
}

export default App;
