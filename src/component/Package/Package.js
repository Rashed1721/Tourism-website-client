import React from 'react';
import { Card } from 'react-bootstrap';

const Package = (props) => {
    const { name, price, description, img, place, packName } = props.packag;
    return (
        <div className="m-3 d-inline-block">
            <Card style={{ width: '23rem' }}>
                <Card.Img width="200px" height="200px" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{packName}</Card.Title>
                    <Card.Text>
                        <p><small>{description}</small></p>
                        <h6>Hotel:{name}</h6>
                        <h6>Location:<small>{place}</small></h6>
                        <h6>Price:{price}</h6>
                        <h6>img-url:<small>{img}</small></h6>
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Package;