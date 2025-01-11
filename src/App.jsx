import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import ItemDetailsPage from "./components/ItemDetailsPage";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ItemList from "./components/ItemList";
import "./App.css";
import MyButton from "./Mybutton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route path="/item/:id" element={<ItemDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route element={NotFoundPage} />
      </Routes>
      <MyButton />
      <Home />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
