import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    // console.log(service)
    const {_id,img, price, title, } = service
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-64" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>


                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-xl text-orange-500'>{price}</p>
                        </div>
                        <div className="card-actions">
    <Link to={`/books/${_id}`}><button className="btn btn-primary"><FaArrowRight></FaArrowRight></button></Link>
                        </div>
                    </div>



                </div>
            </div>
        </>
    );
};

export default ServiceCard;