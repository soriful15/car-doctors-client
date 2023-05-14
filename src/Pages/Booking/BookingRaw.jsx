import React from 'react';

const BookingRaw = ({ booking, handleDelete, handleConfirm }) => {
    const { img, date, service, price, email, customerName, _id, status } = booking
    // console.log(booking)
    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>

                <div className="avatar">
                    <div className="w-32 rounded h-32">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>


                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{email}</td>
            <td>{customerName}</td>
            <td>{date}</td>
            <td>{price}</td>

            <th>
                {status === 'confirm' ? <span className='font-bold text-primary'>Confirmed</span> : <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">please Confirm</button>}
            </th>
        </tr>

    );
};

export default BookingRaw;