import { React, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import './assets/sass/style.css';
import './assets/font/font.css';
import { Home } from './Pages/Home';
import { Thanks } from './Pages/Thanks';
import { Footer } from './components/Footer';
import { MasterContext } from './components/MasterContext';

function App() {

  useEffect(() => {
  document.documentElement.style.setProperty('--headerheight', window.getComputedStyle(document.querySelector("header")).height);
  }, []);

  return (
    <Router>
      <MasterContext>
        <Header />
        <Routes>
          <Route path="/codekmr" element={<Home />} />
          <Route path="/codekmr/thank-you" element={<Thanks />} />
        </Routes>
        <Footer />
      </MasterContext>
    </Router>

  );
}

export default App;

