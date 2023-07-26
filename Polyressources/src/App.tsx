import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//import the components
import TopBar from "./components/TopBar";
import CardMatiere from "./components/Card-matiere";

function App() {
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
