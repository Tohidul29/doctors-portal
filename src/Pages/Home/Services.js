import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Our one of the best services is Fluoride Treatment',
            img: fluoride
        }, 
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Our one of the best services is Fluoride Treatment',
            img: cavity
        }, 
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Our one of the best services is Fluoride Treatment',
            img: whitening
        }, 
    ]
    return (
        <div className='my-16'>
            <div className='text-center'>
                <h3 className='font-semibold text-3xl text-primary'>Our Services</h3>
                <h1 className='mt-6 font-light text-4xl text-accent'>Services We Provide</h1>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10 my-4'>
                {
                    services.map(service => <Service
                        key={service._id} 
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;