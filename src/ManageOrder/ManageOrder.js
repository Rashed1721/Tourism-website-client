import React from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';

const ManageOrder = (props) => {
    const { Name, Location, img } = props.booking;
    const { users, logOut } = useAuth();
    console.log(users)


    return (

        <div className="m-3 d-inline-block">
            <h2>All Orders Are Here</h2>
            <Card style={{ width: '23rem' }}>
                <Card.Img width="200px" height="200px" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{Name}</Card.Title>
                    <Card.Text>

                        <h6>Location:<small>{Location}</small></h6>



                    </Card.Text>

                </Card.Body>
            </Card>


        </div>

    );
};

export default ManageOrder;