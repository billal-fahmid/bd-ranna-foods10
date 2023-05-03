import React from 'react';
import LazyLoad from 'react-lazy-load';

const FoodCard = ({ food }) => {
    const { cookTime, foodName, foodPhoto, price, serves } = food
    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">

            <LazyLoad threshold={0.95}>
                <img
                    className="object-cover rounded-2xl w-full h-48"
                    src={foodPhoto}
                    alt="image"
                />
            </LazyLoad>
            <div className="p-4 text-left">
                <h4 className="text-xl font-semibold tracking-tight text-[#43121d] ">
                    {foodName}
                </h4>
                <p className='text-xl'><span>Time : {cookTime}</span> | Serves : {serves}</p>

                <h3 className='pb-5 text-xl font-semibold text-[#a82d49] mt-4'>Price : {price} $</h3>
                <hr className='pb-5' />
                <button className="bg-[#a82d49]  hover:bg-white transition-all hover:text-[#a82d49] hover:border border-[#a82d49] text-white font-bold py-2 px-6 ">
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default FoodCard;