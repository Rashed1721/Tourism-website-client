import React from 'react';
import Blog from '../../Blog/Blog';
import Footer from '../../Footer/Footer';
import Gallaries from '../../Gallaries/Gallaries';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';





const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Service></Service>

            <Gallaries></Gallaries>
            <Blog></Blog>
            <Footer></Footer>



        </div>
    );
};

export default Home;