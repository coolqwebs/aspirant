import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Student from "./Pages/Student";
import Employee from "./Pages/Employee";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="student" element={<Student />} />
        <Route path="employee" element={<Employee />} />
      </Route>
    </Routes>
  );
}

export default App;
