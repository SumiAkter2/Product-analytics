import React from 'react';
import './Review.css'
const Review = (props) => {
    const { name, picture, post } = props.review;
    return (
        <div  >
            <div className='reviews-container'>
                <img src={picture} alt="" />
                <p>{name}</p>
                <p>{post}</p>
            </div>
           
        </div>
    );
};

export default Review;