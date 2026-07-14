import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddLog from "./components/AddLog";
import ViewLog from "./components/ViewLog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddLog />} />
        <Route path="/view" element={<ViewLog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;