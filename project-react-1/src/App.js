import React from "react";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
