import React from 'react';
import { Card } from 'react-bootstrap';

const Restaurant = (props) => {
    const { name, place, description, img } = props.restaurant;
    return (
        <div className=" ms-2 d-inline-block">
            <Card style={{ width: '23rem' }}>
                <Card.Img width="200px" height="200px" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p><small>{description}</small></p>

                        <h6>Location:<small>{place}</small></h6>

                        <h6>img-url:<small>{img}</small></h6>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Restaurant;