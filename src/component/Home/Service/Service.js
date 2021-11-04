import React from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router-dom';
import css from './Service.css'
const Service = () => {
    return (
        <div className="alldiv-container py-5">


            <h2>Our services</h2>
            <div className=" container-div d-flex  justify-content-center  ">


                <div className="special-div mx-2">
                    <NavLink className="nav text-white mx-auto w-10" to="/offers"><h2>Offers</h2></NavLink>
                </div>


                <div className="p-div ">
                    <div className=" d-flex justify-content-center ">
                        <div className="tour-div mx-2 ">
                            <NavLink className="nav text-white mx-auto w-10" to="/tour"><h2>Tours</h2></NavLink>
                        </div>


                        <div className="hotels-div">
                            <NavLink className="nav text-white mx-auto w-10" to="/hotels"><h2>Hotels</h2></NavLink>
                        </div>

                    </div>


                    <div className="restau-div mt-2 ">
                        <NavLink className="nav text-white mx-auto w-10" to="/restaurant"><h2>Restaurent</h2></NavLink>
                    </div>
                </div>

            </div>

            <div className="container-div2  d-flex justify-content-center mt-2 ">
                <div className="package-div mx-2 ">
                    <NavLink className="nav text-white mx-auto w-10" to="/package"><h2>Package</h2></NavLink>
                </div>
                <div className="veichle-div mx-2 ">
                    <NavLink className="nav text-white mx-auto w-10" to="/vehicle"><h2>Vehicle</h2></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;