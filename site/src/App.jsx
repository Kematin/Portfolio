import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Undefined from "./pages/Undefined";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Stack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Undefined />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer
        style={{
          fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        }}
      />
    </div>
  );
}

export default App;
