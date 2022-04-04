import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css'
import {StarIcon } from '@heroicons/react/solid'

const Review = (props) => {
    const { name, picture, post } = props.review;
    return (
        <div className='reviews-container'>

            <div className='review-body'>
                <img src={picture} alt="" />
                <p>{name}</p>
            </div>
            <div className='text'>
            <div className='star'>
                <StarIcon ></StarIcon>
                <StarIcon ></StarIcon>
                <StarIcon ></StarIcon>
                <StarIcon ></StarIcon>
                <StarIcon ></StarIcon>
                </div>
                <p>{post}</p>
                
            </div>

        </div>


    );
};

export default Review;