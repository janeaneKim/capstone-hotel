import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import './App.css';

import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Dates from "./pages/Dates";
import Error from "./pages/Error";
import Success from './pages/Success';

function App() {

  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component ={Rooms} />
          <Route exact path="/rooms/:slug" component ={SingleRoom} />
          <Route exact path="/book" component={Dates}/>
          <Route exact path="/success" component={Success}/>
          <Route component= {Error}/>
      </Switch>
  </>

    // <>
    //   <Router>
    //     <Navbar/>
    //     <Routes>
    //         <Route exact path="/" element={<Home />} />
    //         <Route exact path="/rooms" element ={<Rooms/>} />
    //         <Route exact path="/rooms/:slug" element ={<SingleRoom/>} />
    //         <Route exact path="/book" element={<Dates/>}/>
    //         <Route exact path="/success" element={<Success/>}/>
    //         <Route path="*" element= {<Error/>}/>
    //     </Routes>
    //   </Router>
    // </>
  );
}

export default App;
