import React from 'react';
import { Card } from 'react-bootstrap';

const Tour = (props) => {
    const { name, description, price, place, img } = props.tour;
    return (

        <div className="m-3 d-inline-block">
            <Card style={{ width: '23rem' }}>
                <Card.Img width="200px" height="200px" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p><small>{description}</small></p>
                        <h6>Location:<small>{place}</small></h6>
                        <h6>Price:{price}</h6>
                        <h6>img-url:<small>{img}</small></h6>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>


    );
};

export default Tour;