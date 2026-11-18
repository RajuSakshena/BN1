import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteShell } from './components/SiteShell';
import Home from './pages/Home';
import Research from './pages/Research';
import Explore from './pages/Explore';
import Datasets from './pages/Datasets';
import About from './pages/About';
import Standards from './pages/Standards';
import Careers from './pages/Careers';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<SiteShell />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="explore" element={<Explore />} />
          <Route path="datasets" element={<Datasets />} />
          <Route path="about" element={<About />} />
          <Route path="standards" element={<Standards />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
