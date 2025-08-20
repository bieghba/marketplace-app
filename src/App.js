// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

// PAGES you already have
import Home from "./pages/Home";
import Listings from "./pages/Listings";

// Auth pages (make sure these files exist)
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Simple header/nav */}
        <header className="border-b">
          <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
            <Link to="/" className="font-bold text-lg">RentReadyPH</Link>
            <div className="flex gap-4">
              <Link to="/">Home</Link>
              <Link to="/listings">Listings</Link>
              <Link to="/login">Login</Link>
              <Link to="/register" className="font-semibold">Register</Link>
            </div>
          </nav>
        </header>

        {/* Routes */}
        <main className="flex-1 max-w-5xl mx-auto w-full p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* fallback: unknown routes go home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="border-t text-center p-4 text-sm">
          © {new Date().getFullYear()} RentReadyPH
        </footer>
      </div>
    </Router>
  );
}
