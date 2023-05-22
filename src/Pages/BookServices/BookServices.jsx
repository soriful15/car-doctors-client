import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'


const BookServices = () => {

    const service = useLoaderData()
    console.log(service)
    const { _id, title, price, img } = service
    const { user } = useContext(AuthContext)


    const handleBookService = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const date = from.date.value
        const email = user?.email
        const booking = {
            customerName: name,
            email,
            date,
            img: img,
            service: title,
            service_id: _id,
            price: price,
        }
        console.log(booking)

        fetch(`https://cars-doctors-server-rho.vercel.app/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log('inside post response', data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })


    }

    return (
        <div>
            <h2 className='text-center text-5xl text-sky-800'>Book Services:{title} </h2>

            <form onSubmit={handleBookService}>
                <div className="card-body">
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                 <input type="text" name='name' defaultValue={user?.displayName} placeholder=" Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due a Amount</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">

         <input className='btn btn-warning btn-block' type="submit" value="Order Confirm" />
                    </div>
                </div>

            </form>






        </div>
    );
};

export default BookServices;