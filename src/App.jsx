import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import RideshareDesign from './RideshareDesign'; // Import the new component

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-gray-900">
      <h1 className="text-2xl font-bold">Welcome to the ReactJS App</h1>
      <p className="mt-2 text-gray-700">
        Use the navigation above to check out our AI-Powered Rideshare design!
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/rideshare-design">AI Rideshare Design</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rideshare-design" element={<RideshareDesign />} />
      </Routes>
    </Router>
  );
}