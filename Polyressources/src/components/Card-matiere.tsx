import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function GroupExample() {
  return (
    <div className="MainContainer-matiere">
      <Card>
        <Link to="/Maths">
          <Card.Img
            variant="top"
            src="../public/icons/math.png"
            className="icon"
          />
          <Card.Body>
            <Card.Title>Maths</Card.Title>
            <Card.Text>
              Ressources pour réussir les maths en Peip1 et Peip2, en DS et en
              Khôlles.
            </Card.Text>
            <a
              href="https://google.com"
              className="btn btn-primary stretched-link"
            ></a>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Td, annales, exos </small>
          </Card.Footer>
        </Link>
      </Card>

      <Card>
        <Link to="/Info">
          <Card.Img variant="top" src="../public/icons/computer-science.png" />
          <Card.Body>
            <Card.Title>Info</Card.Title>
            <Card.Text>
              Ressources pour la programmation en C++, PHP et web en général.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Guides, annales, conseils, tutos
            </small>
          </Card.Footer>
        </Link>
      </Card>

      <Card>
        <Link to="/SDM">
          <Card.Img variant="top" src="../public/icons/ballon.png" />
          <Card.Body>
            <Card.Title>SDM</Card.Title>
            <Card.Text>
              Ressources pour la SDM (science de la matière) en peip1 et peip2.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Cheat Sheets, annales, vidéos</small>
          </Card.Footer>
        </Link>
      </Card>

      <Card>
        <Link to="/Orientation">
          <Card.Img variant="top" src="../public/icons/boussole.png" />
          <Card.Body>
            <Card.Title>Orientation</Card.Title>
            <Card.Text>
              Ressources pour l'orientation/l'alternance en peip1 et peip2.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Liens et guides</small>
          </Card.Footer>
        </Link>
      </Card>

      <Card>
        <Link to="/Autres">
          <Card.Img variant="top" src="../public/icons/autre.png" />
          <Card.Body>
            <Card.Title>Autres</Card.Title>
            <Card.Text>
              Ressources en vrac pour faciliter la Peip1 et la Peip2
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Tableur de validation, bons plans
            </small>
          </Card.Footer>
        </Link>
      </Card>
    </div>
  );
}

export default GroupExample;
