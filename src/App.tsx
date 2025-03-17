import "./App.css";
import './i18n';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home";
import LoginPage from "./pages/Login";
import SingUpPage from "./pages/SingUp";
import WorkspacePage from "./pages/Workspace";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singUp" element={<SingUpPage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
      </Routes>
    </Router>
  );
}

export default App;