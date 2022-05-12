import React from 'react';
import bg from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section className='rounded py-5' style={{
            background: `url(${bg})`
        }}>
            <div className='text-center'>
                <h3 className='text-2xl text-semibold text-secondary'>Contact Us</h3>
                <h2 className='text-4xl text-white text-bold'>Stay connected with us</h2>
            </div>
            <div className='flex flex-col items-center mb-8'>
                <input type="email" placeholder="Email Address" class="mt-4 input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Subject" class="mt-4 input input-bordered w-full max-w-xs" />
                <textarea class="textarea textarea-bordered w-full max-w-xs mt-4" placeholder="Your Message"></textarea>
                <button class="mt-4 btn btn-primary text-white">Submit</button>
            </div>
        </section>
    );
};

export default Contact;