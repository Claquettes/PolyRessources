import React from "react";

import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

//we import yhe css file
import "../styles/Maths.css";

//we import the maths ressources
import InfoRessources from "../assets/ressources/info-ressources.tsx";

const math: React.FC = () => {
  return (
    <>
      <div className="container">
        {InfoRessources.map((resource, index) => (
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

export default math;
