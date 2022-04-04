import React from 'react';
import Review from '../Review/Review';
import useReview from '../useReview/useReview';
import './Home.css'
const Home = () => {
    const [reviews, setReviews]=useReview();
    console.log(reviews);
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
            <section className='review-section'>
                <hr />
                <h2>See Reviews:{reviews.length}</h2>
            <div className='reviews-map'>
            {
                   reviews.map(review=><Review key={review._id}
                   review={review}></Review>)
               }
            </div>
                <hr />
            </section>
        </div>
    );
};

export default Home;