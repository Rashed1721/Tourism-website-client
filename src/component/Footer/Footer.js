import React from 'react';
import css from './Footer.css'

const Footer = () => {
    return (
        // <div className="footer align-items-center" >
        <div className="div-container   align-items-center justify-content-around px-5">
            <div className="">
                <h3>Contact us</h3>
                <h5>Traveller web Ltd.</h5>
                <h5><p>017205999 <br />
                    rashed@gmail.com
                </p>
                </h5>

            </div>
            <div className="">
                <h3>Why Choose Us</h3>
                <h5> &#10003;Secure booking</h5>
                <h5> &#10003;Passonate service</h5>
                <h5> &#10003;Exclusive knowledge</h5>

            </div>
            <div className="">
                <h3>Follow Us</h3>
                <a href="https://web.facebook.com/" class="fa fa-facebook"></a>
                <a href="https://twitter.com/" class="fa fa-twitter"></a>
                <a href="https://www.instagram.com/" class="fa fa-instagram"></a>

            </div>

        </div>




        // </div>


    );
};

export default Footer;