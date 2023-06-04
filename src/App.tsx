import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home";

const App: React.FC = () => {
  return (
    <div className="h-full bg-[#121212] text-white transition-all ease-in delay-75">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
