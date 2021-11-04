import React from 'react';
import { Card } from 'react-bootstrap';
import css from './Hotel.css';

const Hotel = (props) => {
    const { name, img, price, rate, description, place } = props.hotel
    return (



        <div className=" ms-2 d-inline-block" >
            <Card style={{ width: '23rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p><small>{description}</small></p>
                        <h6>Price:<small>{price}</small></h6>
                        <h6>Location:<small>{place}</small></h6>
                        <h6>Rate:{rate}</h6>
                        <h6>img-url:<small>{img}</small></h6>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>



    );
};

export default Hotel;