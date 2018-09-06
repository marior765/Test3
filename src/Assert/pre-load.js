import svg from './pre-load.svg';
import React from 'react';
import './assert.css'

const preload = () => {
    return(
        <div>
            <img src={svg} alt='pre-load' className='svg' />
        </div>
    )
}

export default preload;