import React from "react";
import Jumbotron from "../components/Jumbotron";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";


const Success = () => {
    return (
        <>
            <Jumbotron jumbotron="successJumbotron">
            <Banner title="Booking Successful">
                <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Jumbotron>
        </>
    )
}

export default Success;