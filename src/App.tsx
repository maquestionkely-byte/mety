import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dictionnaire from './pages/Dictionnaire';
import Miresaka from './pages/Miresaka';
import Lecons from './pages/Lecons';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dictionnaire" element={<Dictionnaire />} />
      <Route path="/miresaka" element={<Miresaka />} />
      <Route path="/lecons" element={<Lecons />} />
    </Routes>
  );
}
