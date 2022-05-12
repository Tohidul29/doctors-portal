import React from 'react';

const AvailableAppointment = ({ service, setTreatment }) => {
    const {name, slots } = service;
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length>0? <span>{slots[0]}</span>:
                        <span className='text-red-500'>No Slot Available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces':'space'} available</p>
                <div class="card-actions justify-center">
                    <label onClick={() => setTreatment(service)} class="btn btn-secondary text-white" disabled={slots.length===0} for="booking-modal">BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;