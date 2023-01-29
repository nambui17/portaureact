import React from 'react';
import { Container } from 'react-bootstrap';
import {useSpring, useTransition} from '@react-spring/web';
import '../styles/Resume.css';

function Resume() {
    // list of objects of projects, project title, image url, info, and technologies used
    const projects = [
        {
            title: "Bird Spotter",
            image: "",
            info: "Uses web api's and third party api's to search for birds at a specified location",
            tech: "node.js, leaflet, html, css"
        }
    ];
    // pass in as props to <Project/>
    return(
        <Container className="ResumeCon">
            {projects.map((project) => 
            (<Project 
            title={project.title}
            image={project.image}
            info={project.info}
            tech={project.tech}
            />))}
        </Container>
    )
}

export default Resume;