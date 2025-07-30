import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RippleLoader from "./components/RippleLoader";

import Home from "./components/Home";

function App() {
  return (
    <div className="font-josefin">
      <Router>
        <Home />
        <p className="text-center text-xs   bg-black text-white py-2 px-10">
           copyright &copy; Isreal Ifeoluwa Joshua 2023 - {new Date().getFullYear()} All Rights Reserved.
        </p>
      </Router>
    </div>
  );
}

export default App;
