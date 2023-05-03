import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';

const Foods = () => {
    const [foods , setFoods] = useState([])

    useEffect(()=>{
        fetch(`https://chef-hunter-assignment-12-server-billal-fahmid.vercel.app/foods`)
        .then(res=> res.json())
        .then(data => setFoods(data))
    },[])
    console.log(foods)
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-[#43121d] text-4xl font-semibold mb-5'>Explore Our Foods</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
            <div className='grid grid-cols-3 gap-7 mt-10'>
                {
                    foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>

        </div>
    );
};

export default Foods;