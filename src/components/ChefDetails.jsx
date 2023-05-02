import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefDetails = () => {
    const [details, setDetails] = useState({})
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        fetch(`https://chef-hunter-assignment-12-server-billal-fahmid.vercel.app/recipes`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const chefRecipes = data.find(dt => dt.chefId == id);
                console.log(chefRecipes)
                setDetails(chefRecipes)
            })
    }, [])
    const { chefId, chefName, chefPicture, description, experience, likes, recipes } = details;

    return (
        <div>
            <div className='mt-10'>
               
            <h2 className='text-[#43121d] text-4xl font-semibold mb-5'>Chef Details</h2>
                <div class="max-w-sm w-full lg:max-w-full lg:flex">
                    {/* <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
                    // </div> */}
                    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${chefPicture})` }}
                        title="Woman holding a mug">
                    // </div>
                    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                           
                            <div class="text-[#a82d49] font-bold text-xl mb-2">{chefName}</div>
                            <p class="text-gray-700 text-base">{ description}</p>
                        </div>
                        <div class="flex items-center gap-10">
                            <img class="w-10 h-10 rounded-full mr-4" src={chefPicture} alt="Avatar of Jonathan Reinink" />
                            <div class="text-sm">
                                <p class="text-gray-900 leading-none">Years of Experience : {experience}</p>
                                
                            </div>
                            <div class="text-sm">
                              
                                <p class="text-gray-600">Recipes :{recipes?.length}</p>
                            </div>
                            <div class="text-sm">
                              
                                <p class="text-gray-600">Likes :{likes}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid gap-2 lg:grid-cols-3 mt-8">
                {
                    recipes?.map(recipe => <RecipeCard recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;