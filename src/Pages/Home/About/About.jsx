import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {

    return (
        <div className="hero min-h-screen bg-base-200 mt-9">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 w-full relative'>
                    <img src={person} className="lg:w-3/4 w-full rounded-lg shadow-2xl lg:h-[400px]" />
                    <img src={parts} className="w-1/2 rounded-lg border-8 border-white shadow-2xl absolute lg:right-5 right-0 md:top-0 lg:top-3/4 top-3/4" />
                </div>
                <div className=' lg:w-1/2 space-y-4'>
                    <h3 className='font-bold text-xl text-orange-500 py-3'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        .</p>
                    <p className=''>   the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-warning mt-3">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;