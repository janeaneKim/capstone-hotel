import React, { Component } from "react";
import Title from "./Title";
import {FaCocktail, FaWheelchair, FaWifi, FaUtensils} from 'react-icons/fa';

export default class Services extends Component{
    state={
        services:[
            {
            icon: <FaCocktail/>,
            title: "free cocktails",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dictum felis, vitae imperdiet massa.'
            },
            {
                icon: <FaWheelchair/>,
                title: "wheelchair accessible",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dictum felis, vitae imperdiet massa.'
            },
            {
                icon: <FaWifi/>,
                title: "complimentary wifi",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dictum felis, vitae imperdiet massa.'
            },
            {
                icon: <FaUtensils/>,
                title: "fresh dining daily",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dictum felis, vitae imperdiet massa.'
            }
        ]
    }

    render(){
        return (
            <section className="services">
                <Title title = "Amenities"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

