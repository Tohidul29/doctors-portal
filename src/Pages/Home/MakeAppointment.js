import React from 'react';
import doctor from '../../assets/images/doctor.png';
import bg from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }} className='rounded flex justify-center items-center'>
            <div className='flex-1 hidden lg:block lg:mt-[-200px]'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h3 className='text-2xl text-primary'>Appointment</h3>
                <h2 className='mt-6 text-4xl text-white'>Make an Appointment Today</h2>
                <p className='mt-6 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque quam dolore amet architecto nobis veniam nisi placeat tenetur quibusdam maxime, sequi aspernatur at nihil molestias, magnam id perspiciatis incidunt nulla doloribus consectetur cumque ea? Sunt impedit ab laborum repudiandae!</p>
                <button class="mt-6 btn bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;