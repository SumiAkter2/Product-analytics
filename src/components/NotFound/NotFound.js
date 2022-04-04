import React from 'react';
import './NotFound.css';
import { EmojiSadIcon } from '@heroicons/react/solid'
const NotFound = () => {
    return (
        <div className='body-container'>
            <h1>Oops!!! This Page Is Not Found.</h1>
            <h2>404</h2>
            <EmojiSadIcon className='icon'></EmojiSadIcon>
        </div>
    );
};

export default NotFound;