import React from 'react';
import useReview from '../../Hooks/UseReview';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Reviews.css'
const Reviews = () => {
const [reviews, setReviews]=useReview();
    return (
        <div >
           <h1>Reviews:</h1>
           <div className='customer-review-map'>
           {
                reviews.map(review=><CustomerReview key={review._id} review={review}></CustomerReview>)
            }
            
           </div>
        </div>
    );
};

export default Reviews;