import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <img src={bg} alt=""/>
            <div className="hero-content flex-col lg:flex-row-reverse mt-[-200px]">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" width={594} height={355} alt='chair-img'/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;