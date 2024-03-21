'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const RecipeCard: React.FC<any> = ({ data }) => {

    const handleClick = (url: string) => {
        localStorage.setItem('rec_url', url);
    };
    
    return (
        <>
            {data &&
                data.map((rec: any, i: any) => {
                    return (
                        <div key={i} className="w-72">
                            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                                <Link onClick={() => handleClick(rec._links.self.href)} href={`/recipes/${rec.recipe.label}}`}>
                                    <Image
                                        className="object-cover w-full h-64"
                                        src={rec?.recipe?.image}
                                        alt="Placeholder"
                                        width={300}
                                        height={300}
                                    />
                                </Link>
                                <div className="px-3 py-2">
                                    <div className="font-bold text-xl mb-1">
                                        {rec.recipe.label.length > 20
                                            ? rec.recipe.label.slice(0, 20) + '...'
                                            : rec.recipe.label}
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        Calories: {rec.recipe.calories.toFixed(1)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
};

export default RecipeCard;
