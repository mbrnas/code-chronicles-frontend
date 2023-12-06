import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../src/components/Navbar";
import PostsPage from "./views/PostsPage";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Hero from "./views/Hero";

function App() {
  useEffect(() => {
    document.title = "Code Chronicles";
  }, []);
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
