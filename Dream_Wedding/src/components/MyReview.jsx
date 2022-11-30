import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useTitle } from '../hooks/useTitle';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext)
    const [review, setReview] = useState([])
    useTitle('myReview')

    // console.log(review);
    const handleReviewDelete = _id => {
        const proceed = window.confirm('Are you sure you want to delete this review?')
        if (proceed) {
            fetch(`https://dream-wedding-server.vercel.app/reviews/${_id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = review.filter(review => review._id !== _id);
                        setReview(remaining);
                    }
                })
                .catch(err => console.error(err))
        }

    }

    useEffect(() => {
        fetch(`https://dream-wedding-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                // console.log('received', data)
                setReview(data)
            })

    }, [user?.email, logOut])

    const handleEditButton =() =>{
        // console.log('indrajit')

    }



    return (
        <div className='my-8'>
            <h2 className='md:text-2xl text-center font-semibold py-6'>Your Total Reviews {review?.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <button>EDIT</button>
                            </th>
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
                                    <th>
                                        <label>
                                            <button onClick={handleEditButton}>EDIT</button>
                                        </label>
                                    </th>
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
                                    <th>
                                        <button onClick={() => handleReviewDelete(review._id)} className="btn btn-ghost text-xl">X</button>
                                    </th>
                                </tr>
                            </tbody>
                        )
                    }

                </table>
            </div>

        </div>
    );
};

export default MyReview;