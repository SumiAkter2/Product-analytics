import React from 'react';
import './CustomerReview.css';
import {StarIcon } from '@heroicons/react/solid'
const CustomerReview = (props) => {
    const {name,picture,post}=props.review;
    return (
        <div>
             
            <div className='customer-review'>
            <img src={picture} alt="" />
            <div className='review-text'>
            <div className='stars'>
                <StarIcon ></StarIcon>
                <StarIcon ></StarIcon>
                <StarIcon ></StarIcon>
                <StarIcon ></StarIcon>
                <StarIcon ></StarIcon>
                </div>
            <h5>{name}</h5>
                <p>{post}</p>
                </div>
          
                </div>
          
        </div>
       
          );
};

export default CustomerReview;