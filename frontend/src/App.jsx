import { BrowserRouter, Routes, Route } from "react-router-dom";
import SemesterPage from "./semesterPage.jsx";
import ToolsPage from "./toolsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SemesterPage />} />
        <Route path="/tools" element={<ToolsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
