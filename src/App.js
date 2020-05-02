import React from "react";
import NavBar from "./components/NavBar";

import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";
import SeventhPage from "./components/SeventhPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <p style={{ marginTop: "5%" }} />
      <FirstPage />
      <p style={{ marginTop: "5%" }} />
      <SecondPage />
      <p style={{ marginTop: "5%" }} />
      <ThirdPage />
      <p style={{ marginTop: "5%" }} />
      <FourthPage />
      <p style={{ marginTop: "5%" }} />
      <FifthPage />
      <p style={{ marginTop: "5%" }} />
      <SixthPage />
      <p style={{ marginTop: "5%" }} />
      <SeventhPage />
      <p style={{ marginTop: "5%" }} />
      <Footer />
    </div>
  );
}

export default App;
