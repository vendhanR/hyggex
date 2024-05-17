import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Flashcard from "./components/Flashcard";
import Mathematics from "./components/Mathematics";

function App() {

  return (
    <div className="px-10 md:px-24">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcard" element={<Flashcard />} />
        <Route path="/mathematics" element={<Mathematics />} />
      </Routes>
    </div>
  );
}

export default App;