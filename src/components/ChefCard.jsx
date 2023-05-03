import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ chef }) => {
    console.log(chef)
    const { chefId, chefName, chefPicture, experience, likes, recipes } = chef
    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">

            <LazyLoad threshold={0.95}>
                <img
                    className="object-cover w-full h-48"
                    src={chefPicture}
                    alt="image"
                />
            </LazyLoad>
            <div className="px-4 py-8">
                <h4 className="text-xl font-semibold tracking-tight text-[#a82d49]">
                    {chefName}
                </h4>
                <p className="mb-2 leading-normal">
                    Years of experience: {experience}
                </p>
                <div className='flex gap-7 justify-center mb-5'>
                    <small>Likes : <span>{likes}</span></small>
                    <small>Recipes : <span>{recipes.length}</span></small>
                </div>
                <Link to={`/chefs/${chefId}`} className="bg-[#a82d49]  hover:bg-white hover:text-[#a82d49] hover:border border-[#a82d49] text-white font-bold py-2 px-6 ">
                    View Recipes Button
                </Link>
            </div>
        </div>
    );
};

export default ChefCard;