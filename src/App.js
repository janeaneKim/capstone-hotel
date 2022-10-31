import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

import './App.css';

import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  exact path="/rooms" element ={<Rooms/>} />
            <Route exact path="/rooms/:single" element ={<SingleRoom/>} />
            <Route path="*" element= {<Error/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
