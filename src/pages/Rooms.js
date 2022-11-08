import React from "react";
import Jumbotron from "../components/Jumbotron"
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'
import RoomsContainer from "../components/RoomContainer";

const Rooms = () => {
    return (
        <>
            <Jumbotron jumbotron="roomsJumbotron">
                <Banner title="Our Rooms">
                <Link to="/" className="btn-primary">Return Home</Link>
                </Banner>
            </Jumbotron>
            <RoomsContainer />
        </>
    )
}

export default Rooms;