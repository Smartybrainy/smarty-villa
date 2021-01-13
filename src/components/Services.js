import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

class Services extends Component {
    state =  {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab."
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab."
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Van",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab."
            },
            {
                icon: <FaBeer />,
                title: "Offer Beer man",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab."
            },
        ]
    }
    render() {
        return (
            <section>
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default Services;