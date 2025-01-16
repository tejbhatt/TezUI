import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonShowcase from './layout/ButtonShowcase';
import './index.css';
import About from './layout/About';
import CheckBox from './layout/CheckBox';
import CardLayout from './layout/CardLayout';

const Home: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
    <h1 className="text-3xl font-bold mb-4">Welcome to TezUI</h1>
    <p className="text-lg">A Small and fast frontend library for all your needs...</p>
    <div className="mt-4">
      <Link to="/button" className="text-blue-500 hover:underline mr-4">
        Go to Button Showcase
      </Link>
      <Link to="/about" className="text-blue-500 hover:underline">
        About Page
      </Link>
      <Link to="/checkbox" className="text-blue-500 hover:underline">
        checkbox
      </Link>
      <Link to="/card" className="text-blue-500 hover:underline">
        card
      </Link>
    </div>
  </div>
);



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button" element={<ButtonShowcase />} />
        <Route path="/checkbox" element={<CheckBox />} />
        <Route path="/card" element={<CardLayout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
