import React from 'react';
import { Card } from 'react-bootstrap';

const Myorder = (props) => {
    const { _id, Name, img, Location } = props.order;
    const handleDelete = (id) => {
        const del = window.confirm('Are you sure,you wanr to delete')
        if (del) {
            fetch(`https://nameless-beach-37399.herokuapp.com/users/${id}`, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                });
        }
    }

    return (
        <div className="m-3 d-inline-block">
            <Card style={{ width: '23rem' }}>
                <Card.Img width="200px" height="200px" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{Name}</Card.Title>
                    <Card.Text>
                        <h6>Location:{Location}</h6>
                        <button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete</button>
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Myorder;