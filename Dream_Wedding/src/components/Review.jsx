import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { useTitle } from '../hooks/useTitle';

const Review = () => {
    const { service_name,service_id} = useLoaderData()
    const { user } = useContext(AuthContext)
    useTitle('review')

    const handleReviewSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = `${user?.displayName}` 
        const rating = form.rating.value;
        const comment = form.comment.value; 

        const review = {
            service_name: service_name,
            service_id:service_id,
            email:user.email,
            name,
            rating,
            comment,

        }
        fetch('https://dream-wedding-server.vercel.app/reviews',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err));

        
        form.reset();
    }

    return (
        <div>
            <h2 className='text-center text-3xl py-6 font-bold'>Send Your Review</h2>
            <form onSubmit={handleReviewSubmit}>
                <h2 className='text-center text-xl font-bold'>{service_name}</h2>
                <div className='mx-auto md:w-1/2 my-8'>
                    <div>
                        <label className='text-xl font-semibold pl-4'>Name</label>
                        <input type="text" placeholder="Your Name" defaultValue={user?.displayName} readOnly className="input input-bordered w-full my-4"required  />
                    </div>
                    <div>
                        <label className='text-xl font-semibold pl-4'>Rating</label>
                        <input type="number" name='rating' placeholder="Your rating" className="input input-bordered my-4 w-full" required />
                    </div>
                    <div>
                        <label className='text-xl font-semibold pl-4'>Comment</label>
                        <textarea name='comment' className="textarea textarea-bordered w-full my-4" placeholder="Bio" required></textarea>
                    </div>
                    <input className='btn btn-outline' type="submit" value='Submit' />
                </div>
            </form>
        </div>
    );
};

export default Review;