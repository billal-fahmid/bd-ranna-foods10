import React from 'react';
import { useParams } from 'react-router-dom';

const ChefDetails = () => {
    const id = useParams();
    return (
        <div>
            <h2>Chef Details are Here</h2>
        </div>
    );
};

export default ChefDetails;