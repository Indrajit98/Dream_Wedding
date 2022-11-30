import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

const ServiceIdReviews = () => {
    const service = useLoaderData()
    // console.log(service?.service_id);
    const [review, setReview] = useState([])
    // console.log(review);
    useTitle('serviceIdReviews')


    useEffect(() => {
        fetch(`https://dream-wedding-server.vercel.app/serviceIdReviews?service_id=${service?.service_id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReview(data)
            })
    }, [service?.service_id])

    return (
        <div className='md:my-20 my-8'>
            <div>
                <h2 className='md:text-2xl text-center font-semibold py-6'>{service.service_name} Total Reviews {review?.length}</h2>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Comment</th>
                                <th>rating</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            review?.map(review =>
                                <tbody key={review?._id}>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-bold">{review?.service_name}</div>
                                                    <div className="text-sm opacity-50">{review?.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {review?.comment}
                                        </td>
                                        <td>{review?.rating}</td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>

                </div>

            </div>
        </div>
    );
};

export default ServiceIdReviews;