import "./App.css";
import "./RouterApp.css";

import App from "./App";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

//import the pages
import Maths from "./pages/Maths";
import Info from "./pages/Info";
import SDM from "./pages/SDM";
import Orientation from "./pages/Autres";
import Autres from "./pages/Autres";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function RouterApp() {
  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Maths" element={<Maths />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/SDM" element={<SDM />} />
          <Route path="/Orientation" element={<Orientation />} />
          <Route path="/Autres" element={<Autres />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default RouterApp;
