import React from "react";
import Jumbotron from '../components/Jumbotron';
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import paradise from "../images/paradise-font.png"
import Services from "../components/Services";


const Home = () => {
    return (
        <>
            <Jumbotron jumbotron="defaultJumbotron">
                {/* <Banner title="Beautiful Rooms" subtitle="Enjoy your getaway at a variety of rates"></Banner>
                <Link to="/rooms" className="btn-primary">Our Rooms</Link> */}
                <img className="paradise-font" src={paradise} alt="paradise-font"></img>
            </Jumbotron>
             <Services />
        </>
    )
}

export default Home;
