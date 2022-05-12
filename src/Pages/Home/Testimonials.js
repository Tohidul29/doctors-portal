import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Lional Messi',
            reviews: 'I love their treatment style. full 10 on 10 service. For more info visit their official website.',
            img: people1,
            location: 'Dhaka, Bangladesh'
        },
        {
            _id: 2,
            name: 'Rohima Khatun',
            reviews: 'I love their treatment style. full 10 on 10 service. For more info visit their official website.',
            img: people2,
            location: 'Dhaka, Bangladesh'
        },
        {
            _id: 3,
            name: 'Amena Begum',
            reviews: 'I love their treatment style. full 10 on 10 service. For more info visit their official website.',
            img: people3,
            location: 'Dhaka, Bangladesh'
        }
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What our Patients say?</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10 my-4'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review = {review}
                    ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Testimonials;