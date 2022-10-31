import React from "react";
import Jumbotron from "../components/Jumbotron"
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'

export default function Error (){
    return (
        <Jumbotron jumbotron="defaultJumbotron">
            <Banner title="404">
                <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Jumbotron>
    )
}