'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const FoodIdPage = ({ params: { id } }: { params: { id: string } }) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.edamam.com/api/food-database/v2/parser?app_id=13df9f74&app_key=db48119bb671fe8750233ef904a453b0&ingr=${id}`,
                );
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!data) {
        return <div className="text-center mt-4">LOADING</div>;
    }

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
            <h1 className="text-3xl font-bold mb-4">{data?.hints[0].food.label}</h1>
            <Image
                src={
                    data?.hints[0].food.image ||
                    'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                }
                alt={data?.hints[0].food.label}
                width={300}
                height={300}
                className="mx-auto"
            />
            <div className="flex justify-around">
                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Nutrients</h2>
                    <ul>
                        <li>Calories: {data?.hints[0].food.nutrients.ENERC_KCAL} kcal</li>
                        <li>Protein: {data?.hints[0].food.nutrients.PROCNT} g</li>
                        <li>Fat: {data?.hints[0].food.nutrients.FAT} g</li>
                        <li>Carbohydrates: {data?.hints[0].food.nutrients.CHOCDF} g</li>
                        <li>Fiber: {data?.hints[0].food.nutrients.FIBTG} g</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Measures</h2>
                    <ul>
                        {data?.hints[0].measures.map((measure: any, index: any) => (
                            <li key={index}>
                                {measure.label}: {measure.weight} g
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FoodIdPage;
