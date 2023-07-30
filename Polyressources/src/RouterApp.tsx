import "./App.css";
import "./RouterApp.css";

import App from "./App";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

//import the pages
import Contact from "./pages/Contact";
import Maths from "./pages/Maths";
import Info from "./pages/Info";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function RouterApp() {
  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Maths" element={<Maths />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default RouterApp;
