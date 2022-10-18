import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import ProjectDetail from "./routes/ProjectDetail.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
