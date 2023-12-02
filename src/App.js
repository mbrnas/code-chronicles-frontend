import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../src/components/Navbar';
import PostsPage from './views/PostsPage';
// import other pages

function App() {
    return (
        <Router>
            <NavBar />
            <div className="container mt-4">
                <Routes>
                    {/* <Route path="/" element={<HomePage />} /> */}
                    <Route path="/posts" element={<PostsPage />} />
                    {/* Define other routes */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
