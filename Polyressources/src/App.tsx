import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//import the components
import TopBar from "./components/TopBar";
import CardMatiere from "./components/Card-matiere";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="TopBarApp">
        <TopBar />
      </div>
      <div className="MainContainer">
        <CardMatiere />
      </div>
      <Footer />
    </>
  );
}

export default App;
