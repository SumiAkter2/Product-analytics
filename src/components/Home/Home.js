import React from 'react';
import './Home.css'
const Home = () => {
    return (
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
    );
};

export default Home;