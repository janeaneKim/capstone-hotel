import React from "react";
import Jumbotron from '../components/Jumbotron';
import paradise from "../images/paradise-font.png"
import FeaturedRooms from "../components/FeaturedRooms";
import Amenities from "../components/Amenities";


const Home = () => {
    return (
        <>
            <Jumbotron jumbotron="defaultJumbotron">
                {/* <Banner title="Beautiful Rooms" subtitle="Enjoy your getaway at a variety of rates"></Banner>
                <Link to="/rooms" className="btn-primary">Our Rooms</Link> */}
                <img className="paradise-font" src={paradise} alt="paradise-font"></img>
            </Jumbotron>
            <Amenities />
            <FeaturedRooms/>
        </>
    )
}

export default Home;
