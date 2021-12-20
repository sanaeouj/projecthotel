import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import CustomTitle from "../CustomTitle";
import "./index.css";
export default class Services extends Component<{}, IStateServices> {
  public readonly state: Readonly<IStateServices> = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Cuisine gastronomique",
        info: "Entre grillades raffinées, barbecues sur la plage, recettes marocaines authentiques ou encore cuisine méditerranéenne.",
      },
      {
        icon: <FaHiking />,
        title: "Buffets merveilleux ",
        info: " Au cœur du Resort ou aux bords de la piscine, nos buffets proposent les spécialités des grandes cuisines internationales.",
      },
      {
        icon: <FaShuttleVan />,
        title: "En direct du gril ",
        info: "Régalez-vous de bœuf Wagyu de qualité supérieure face à notre parcours de golf, d'un steak grillé à la plage ou encore d'un kebab fraîchement préparé..",
      },
      {
        icon: <FaBeer />,
        title: "En direct du gril ",
        info: "Régalez-vous de bœuf Wagyu de qualité supérieure face à notre parcours de golf, d'un steak grillé à la plage ou encore d'un kebab fraîchement préparé..",
      },
    ],
  };

  public render() {
    const { services } = this.state;
    return (
      <section className="services">
        <CustomTitle title="services" />
        <div className="services-center">
          {services.map((item: Service, index: number) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
