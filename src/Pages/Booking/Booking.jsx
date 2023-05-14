import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useState } from 'react';
import BookingRaw from './BookingRaw';


const Booking = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBooking] = useState([]);
    const url = `http://localhost:4000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))

    }, [])

    const handleDelete = (_id) => {
        console.log(_id)
        const proceed = confirm('Are you sure? you want to delete?')
        if (proceed) {
            fetch(`http://localhost:4000/bookings/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Delete Successfully')
                    }

                })
            const remaining = bookings.filter(b => b._id !== _id)
            setBooking(remaining)
        }
    }



    const handleConfirm = (id) => {
        fetch(`http://localhost:4000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify({ status: 'confirm' })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // update state
                    alert('Updated Successfully')
                    const remaining = bookings.filter(b => b._id !== id)
                    const updated = bookings.find(b => b._id === id)
                    updated.status = 'confirm'
                    const newBooking = [updated, ...remaining]
                    setBooking(newBooking)
                }
            })
    }

    return (
        <div>
            <h1 className='text-center text-5xl'>Your booking:{bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Img</th>
                            <th>service</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            bookings.map(booking => <BookingRaw
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></BookingRaw>)
                        }


                    </tbody>


                </table>
            </div>






        </div>
    );
};

export default Booking;