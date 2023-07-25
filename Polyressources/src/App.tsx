import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//import the components
import TopBar from "./components/TopBar";
import CardMatiere from "./components/Card-matiere";
import MatieresContainer from "./components/MatieresContainer";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
      <div className="MainContainer">
        <CardMatiere />
      </div>
    </>
  );
}

export default App;
