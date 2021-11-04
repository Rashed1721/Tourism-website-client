import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://nameless-beach-37399.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            {
                bookings.map(booking => <ManageOrder
                    booking={booking}

                ></ManageOrder>)
            }
        </div>
    );
};

export default ManageOrders;