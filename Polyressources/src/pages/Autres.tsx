import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//we import yhe css file
import "../styles/Maths.css";

//we import the maths ressources
import AutresRessources from "../assets/ressources/autres-ressources.tsx";

const orient: React.FC = () => {
  return (
    <>
      <div className="container">
        {AutresRessources.map((resource) => (
          //we create a bootstrap card for each ressource
          <Card className="mt-5">
            <Link to={resource.link}>
              <Card.Img variant="top" src={resource.image} />
              <Card.Body>
                <Card.Title>{resource.title}</Card.Title>
                <Card.Text>{resource.description}</Card.Text>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
};

export default orient;
