import React from 'react';
import { CashIcon, GiftIcon, MenuIcon, TrendingUpIcon } from '@heroicons/react/solid';
import './About.css'
const About = () => {
    return (
        <div>
            <h1 style={{marginBottom:'100px',marginTop:'80px', color:"darkblue"}}>Best Features</h1>
            <div className='about-container'>
                <h1><CashIcon className='icons'></CashIcon> Multi Currency Support </h1>
                <h1><MenuIcon className='icons'></MenuIcon> Multi Menu Support </h1>
                <h1><GiftIcon className='icons'></GiftIcon>Gift Voucher </h1>
                <h1><TrendingUpIcon className='icons'></TrendingUpIcon>Business policy </h1>
               
            </div>
        </div>
    );
};

export default About;