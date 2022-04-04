import React from 'react';
import { CardGroup } from 'react-bootstrap';
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
                <p>Your satisfaction is your desire. </p>
                <button className='home-btn'>Explore more ... </button>
            </div>
            <div className="img-container">
                <img src="jewellery-2.png" alt="" />
            </div>
           </div>
           <h2 style={{marginBottom:'60px',marginTop:"60px", color:'darkblue'}}>Customer Review</h2>
       <div className='reviews-map'>
      
             {
                 reviews.map(review=><Review key={review._id} review={review}></Review>)
             }
     
       </div>
       <button className='review-btn'>Explore more..</button>
                    
          
               
               
        
               
        </div>
    );
};

export default Home;