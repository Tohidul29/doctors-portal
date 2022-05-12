import React from 'react';

const Service = ({service}) => {
    const {img, description, name} = service;
    return (
        <div Class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure Class="px-10 pt-10">
                <img src={img} alt="Shoes" ClassName="rounded-xl" />
            </figure>
            <div Class="card-body items-center text-center">
                <h2 Class="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;