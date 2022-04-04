import React from 'react';

import { Link } from 'react-router-dom';
import useReview from '../../Hooks/UseReview';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {
    const [reviews, setReviews]=useReview();
  
    return (
        <div >
           <div className='container'>
           <div className="text-container">
                <h1>Jewelry Empire</h1>
                <h3>Choose Your Best</h3>
                <p>Your satisfaction is our desire.We guarantee our customer that our products are 100% real. </p>
                <button className='home-btn'>Explore more ... </button>
            </div>
            <div className="img-container">
                <img src="jewellery-2.png" alt="" />
            </div>
           </div>
           <h2 style={{marginBottom:'60px',marginTop:"60px", color:'darkblue'}}>Customer Review</h2>
       <div className='reviews-map'>
      
             {
                 reviews.slice(0,3).map(review=><Review key={review._id} review={review}></Review>)
             }
     
       </div>
     <Link to='/reviews'>  <button className='review-btn'>Explore more..</button></Link>
   
        </div>
    );
};

export default Home;