import React from "react";
import { Container } from "react-bootstrap";
import { useSpring, useTransition } from "@react-spring/web";
import Project from "./Project";
import "../styles/Work.css";

function Work() {
  // list of objects of projects, project title, image url, info, and technologies used
  const projects = [
    {
      id: 1,
      title: "Bird Spotter",
      image: "assets/images/BirdSpot.jpg",
      info: "Uses web api's and third party api's to search for birds at a specified location",
      tech: "node.js, leaflet, html, css",
      link: "https://mjkonkel.github.io/bird-tracker/",
      gh: "https://github.com/mjkonkel/bird-tracker"
    },
    {
      id: 2,
      title: "Power Trip",
      image: "assets/images/PowerTrip.jpg",
      info: "Uses web api's and third party api's to search for birds at a specified location",
      tech: "node.js, leaflet, html, css",
      link: "https://power-trip.herokuapp.com/",
      gh: "https://github.com/nambui17/Power-Trip"
    },
    {
      id: 3,
      title: "Tlog",
      image: "assets/images/Tlog.jpg",
      info: "A blog website backend framework using handlebars.js, MySQL, and sequelize for tech applications",
      tech: "Bootstrap, Handlebars.js, MySQL, Sequelize, node.js",
      link: "https://tlog.herokuapp.com/",
      gh: "https://github.com/nambui17/Tech-blog"
    },
  ];
  // pass in as props to <Project/>
  return (
    <Container fluid className="d-flex flex-wrap justify-content-center">
      {projects.map((project) => (
        <Project
          title={project.title}
          image={project.image}
          info={project.info}
          tech={project.tech}
          link={project.link}
          gh={project.gh}
          key={project.id}
        />
      ))}
    </Container>
  );
}

export default Work;
