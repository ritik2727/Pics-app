import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
            Authorization:' Client-ID VNQL9MonSoZuJx2JsprNutDFQ6Yv7abNzkMAdA-PhFw'
        }
    }
)