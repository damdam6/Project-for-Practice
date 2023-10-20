import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import React from "react";
//import Movie from "./components/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
