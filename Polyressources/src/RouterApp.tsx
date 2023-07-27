import "./App.css";
import "./RouterApp.css";

import App from "./App";
import TopBar from "./components/TopBar";

//import the pages
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function RouterApp() {
  return (
    <>
      <Router>
        <Nav>
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/Contact">Contact</Link>
          </Nav.Item>
        </Nav>
        <a href="/Contact">Contact</a>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterApp;
