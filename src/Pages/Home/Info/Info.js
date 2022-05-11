import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker  from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const info = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 px-12'>
            <InfoCard cardTitle='Opening Hours' bgClass='bg-gradient-to-r from-primary to-secondary' img={clock}></InfoCard>
            <InfoCard cardTitle='Visit Our Location' bgClass='bg-accent' img={marker}></InfoCard>
            <InfoCard cardTitle='Contact Us Now' bgClass='bg-gradient-to-r from-primary to-secondary' img={phone}></InfoCard>
        </div>
    );
};

export default info;