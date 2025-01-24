import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "../src/Pages/DashboardPage";
import ItemDetailsPage from "../src/Pages/ItemDetailsPage";
import AboutPage from "../src/Pages/AboutPage";
import NotFoundPage from "../src/Pages/NotFoundPage";
import Home from "../src/Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/ItemDetails" element={<ItemDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
