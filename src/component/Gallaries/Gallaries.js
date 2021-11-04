import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Gallaries.css'
const Gallaries = () => {


    return (
        <div className="div  ">
            <div className="box">
                <div className="g-card p-4" >
                    <h1>This is Gallary</h1>
                    <p>Here is our tourist picture.they enjoyed a lot with us.we have capture their joyful moments oftheir life</p>
                    <NavLink to="/gallery"><button className="btn btn-size btn-color ">See Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Gallaries;