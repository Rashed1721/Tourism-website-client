import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';


const Gallery = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch('https://nameless-beach-37399.herokuapp.com/gallery')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])
    return (
        <div>
            {
                images.map(image => <div className=" m-2 d-inline-block" >
                    <Card style={{ width: '23rem' }}>
                        <Card.Img variant="top" width="350px" height="300px" src={image.img} />
                        <Card.Body>
                            {/* <Card.Title>{name}</Card.Title> */}
                            <Card.Text>
                                <p><small>{image.description}</small></p>
                                {/* <h6>Price:<small>{price}</small></h6> */}
                                {/* <h6>Location:<small>{place}</small></h6> */}
                                {/* <h6>Rate:{rate}</h6> */}
                                {/* <h6>img-url:<small>{img}</small></h6> */}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                )
            }
            <Footer></Footer>
        </div>
    );
};

export default Gallery;