import React from "react";
import Jumbotron from "../components/Jumbotron"
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'

const Rooms = () => {
    return (
        <Jumbotron jumbotron="roomsJumbotron">
            <Banner title="Our Rooms">
            <Link to="/" className="btn-primary"></Link>
            </Banner>
        </Jumbotron>
    )
}

export default Rooms;