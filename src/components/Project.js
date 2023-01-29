import React from 'react';
import { Card } from 'react-bootstrap';

function Project({title, image, info, tech, link, gh}) {
    return (
        <Card className="col-xs-10 col-md-6 col-lg-3 m-3">
            <Card.Img src={image}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{info}</Card.Text>
                <footer>{tech}</footer>
                <Card.Link href={link}>Click Here!</Card.Link>
                <Card.Link href={gh}>GitHub</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Project;