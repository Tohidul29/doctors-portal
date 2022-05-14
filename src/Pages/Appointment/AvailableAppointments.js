import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <section>
            <h3 className='text-xl text-center text-secondary'>Available Appointments on {format(date, 'PP')}</h3>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 my-4'>
                {
                    services.map(service => <AvailableAppointment
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    >

                    </AvailableAppointment>)
                }
            </div>
            {treatment && <BookingModal date={date} key={treatment._id} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;