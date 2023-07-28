import React from "react";

import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

//we import yhe css file
import "../styles/Maths.css";

//we import the maths ressources
import MathsRessources from "../assets/ressources/maths-ressources.tsx";

const math: React.FC = () => {
  return (
    <>
      <h1>Ressources de Maths</h1>
      <div className="container">
        {MathsRessources.map((resource, index) => (
          //we create a bootstrap card for each ressource
          <Card className="mt-5">
            <Card.Img variant="top" src={resource.image} />
            <Card.Body>
              <Card.Title>{resource.title}</Card.Title>
              <Card.Text>{resource.description}</Card.Text>
              <Button variant="primary" href={resource.link}>
                Lien
              </Button>

              <a href="/" class="btn btn-primary stretched-link">
                Go somewhere
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default math;
