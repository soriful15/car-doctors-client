
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://cars-doctors-server-rho.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-8'>
            <div className='text-center space-y-4'>
                <h3 className='text-2xl text-amber-700'>Service</h3>
                <h1 className='text-5xl font-bold text-black'>Our Service Area</h1>
                <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;