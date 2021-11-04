import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Footer/Footer';
import Restaurant from '../Restaurant/Restaurant';

const Restaurents = () => {
    const { register, handleSubmit, reset } = useForm();
    const [restaurants, setrestaurants] = useState([]);
    useEffect(() => {
        fetch('https://nameless-beach-37399.herokuapp.com/restaurants')
            .then(res => res.json())
            .then(data => setrestaurants(data))
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

            <div className="restaurants-container">
                {
                    restaurants.map(restaurant => <Restaurant
                        restaurant={restaurant}
                        key={restaurant.name}
                    ></Restaurant>)
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

export default Restaurents;