import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';
import { useForm } from "react-hook-form";
import axios from 'axios';
import css from './Hotels.css'
import Footer from '../Footer/Footer';
import Banner from '../Home/Banner/Banner';
const Hotels = () => {
    const { register, handleSubmit, reset } = useForm();

    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('https://nameless-beach-37399.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => setHotels(data));
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
        <div className="hotel-container">
            <Banner></Banner>
            <h1>This is your Booking</h1>
            <div>
                {
                    hotels.map(hotel => <Hotel

                        hotel={hotel}
                        key={hotel.name}
                    ></Hotel>)
                }
            </div>




            <div className="booking">
                <h1>Book Your Chosen Hotel</h1>
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

export default Hotels;