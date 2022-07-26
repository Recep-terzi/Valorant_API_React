import React from "react";
import {Route,Routes} from "react-router-dom"
import Detail from "./components/Detail/Detail";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Weapons from "./components/Weapons/Weapons";
function App() {
 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
