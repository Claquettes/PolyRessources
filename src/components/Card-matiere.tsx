import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

function GroupExample() {
  return (
    <div className="MainContainer-matiere">
      <Card>
        <Link to="/Maths">
          <Card.Img
            variant="top"
            src="https://claq.fr/host/math.png"
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
          <Card.Img
            variant="top"
            src="https://claq.fr/host/computer-science.png"
          />
          <Card.Body>
            <Card.Title>Info</Card.Title>
            <Card.Text>
              Ressources pour la programmation en C++, PHP et web en général.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Guides, conseils, tutos</small>
          </Card.Footer>
        </Link>
      </Card>

      <Card>
        <Link to="/SDM">
          <Card.Img variant="top" src="https://claq.fr/host/ballon.png" />
          <Card.Body>
            <Card.Title>SDM</Card.Title>
            <Card.Text>
              Ressources pour la SDM (science de la matière) en peip1 et peip2.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Tips, annales, vidéos</small>
          </Card.Footer>
        </Link>
      </Card>

      <Card>
        <Link to="/Orientation">
          <Card.Img variant="top" src="https://claq.fr/host/boussole.png" />
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
          <Card.Img variant="top" src="https://claq.fr/host/autre.png" />
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
      <Card>
        <Link to="https://claq.fr/PolyNetwork">
          <Card.Img
            variant="top"
            src="https://static.wikia.nocookie.net/c1bdc9f0-538c-4502-81ba-6dcf33c1f7d7/scale-to-width/755"
          />
          <Card.Body>
            <Card.Title>PolyNetwork</Card.Title>
            <Card.Text>Nouveau | non affilié à Polytech</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small
              className="text-muted"
              style={{
                fontSize: "0.65rem",
                margin: "0px",
                padding: "0px",
              }}
            >
              Créé par des étudiants de Polytech Lyon, afin de se construire un
              réseau professionnel dès la première année.
            </small>
          </Card.Footer>
        </Link>
      </Card>
    </div>
  );
}

export default GroupExample;
