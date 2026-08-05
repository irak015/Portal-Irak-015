/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tentang-kami" element={<About />} />
          <Route path="kegiatan" element={<Activities />} />
          <Route path="galeri" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
