import "../styles/TopBar.css";

//import the pages
import Contact from "../pages/Contact";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function TopBar() {
  return (
    <div className="TopBar">
      <a href="./pages/contact.html" className="main-title">
        Les Polyressources
      </a>
      <Nav>
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/Contact">Contact</Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default TopBar;
