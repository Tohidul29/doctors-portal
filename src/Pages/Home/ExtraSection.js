import React from 'react';
import treatment from '../../assets/images/treatment.png'

const ExtraSection = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row lg:px-24">
                <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" alt='extra-section-img'/>
                <div className='lg:ml-16 sm:mt-4'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse consectetur soluta deserunt, nihil ea quo. Quae assumenda delectus, totam explicabo cumque, quidem inventore error eaque magnam nobis minima. Iusto ratione sunt, modi quas est cumque facere laboriosam quae aut minus fugiat repellendus repellat eum nostrum doloremque labore dicta eveniet sed.</p>
                    <button class="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;