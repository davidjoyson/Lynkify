import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './Components/Landingpage';
import Dashboard from './Components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
