import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, reviews, img, location } = review;
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{reviews}</p>
                <div class="flex card-actions justify-around items-center my-4">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='reviewers' />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-2xl'>{name}</h5>
                        <small>{location}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;