import "../styles/TopBar.css";

//import the pages

import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function TopBar() {
  return (
    <div className="TopBar">
      <a href="./pages/contact.html" className="main-title">
        Les Polyressources
      </a>
      <Nav>
        <Nav.Item className="nav-item-topbar">
          <Link to="/">Acceuil</Link>
        </Nav.Item>
        <Nav.Item className="nav-item-topbar">
          <a href="https://github.com/Claquettes/PolyRessources">Github</a>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default TopBar;
