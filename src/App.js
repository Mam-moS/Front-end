import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import StudyHomePage from './pages/StudyPage';
import StudyCalenderPage from './pages/StudyCalenderPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/studyHome" element={<StudyHomePage />} />
        <Route path="/studyCalender" element={<StudyCalenderPage />} />
      </Routes>
    </div>
  );
}

export default App;
