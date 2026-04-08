/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Cursos from './pages/Cursos';
import Equipamiento from './pages/Equipamiento';
import Expediciones from './pages/Expediciones';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expediciones" element={<Expediciones />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/equipamiento" element={<Equipamiento />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
