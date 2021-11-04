import React, { useEffect, useState } from 'react';

import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Myorder from '../Myorder/Myorder';

const MyOrders = () => {
    const [orders, setorders] = useState([])
    const { users } = useAuth();

    useEffect(() => {
        fetch(`https://nameless-beach-37399.herokuapp.com/users/${users.email}`)
            .then(res => res.json())
            .then(data => setorders(data))
    }, [users.email])

    return (
        <div>
            {
                orders?.map(order => <Myorder
                    order={order}
                ></Myorder>)
            }
        </div>

    );
};

export default MyOrders;