import React from "react";
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
      <MyButton />
      <Home />
      <ItemList />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;