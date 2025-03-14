import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './Pages/Landingpage';
import Dashboard from './Pages/Dashboard';
import AddReferral from "./Pages/AddReferral";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addreferral" element={<AddReferral />} />
      </Routes>
    </Router>
  );
}

export default App;
