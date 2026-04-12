import './App.css';

import { Routes, Route } from "react-router-dom";
import RoleAndLocation from './components/RoleAndLocation';
import SignOn from './components/SignOn';
import SignOff from './components/SignOff';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<SignOn />} />
        <Route path="/role-and-location" element={<RoleAndLocation />} />
        <Route path="/signoff" element={<SignOff />} />
      </Routes>

    </>
  );
}

export default App; 
