import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Footer/Footer';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([])
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch('https://nameless-beach-37399.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])

    const onSubmit = data => {
        console.log(data);
        fetch('https://nameless-beach-37399.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                reset()
            })
    }

    return (
        <div>

            <div>
                {
                    tours.map(tour => <Tour
                        tour={tour}
                        key={tour.name}
                    ></Tour>)
                }
            </div>



            <div className="booking">
                <h1>Choose Your Tour</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("Name", { required: true, maxLength: 20 })} placeholder="hotel-name" />
                    <input type="name" {...register("Location")} placeholder="place" />
                    <input {...register("img")} placeholder='img-url' />
                    <input {...register("email")} placeholder='enter your mail' />
                    <input type="submit" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Tours;