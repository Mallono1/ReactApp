import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css";
import MyButton from "./Mybutton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyButton />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
