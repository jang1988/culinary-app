'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Props {}

const RecipesPage = ({}) => {
    const [data, setData] = useState<any>(null);
    console.log('data: ', data);

    const rec_url: any = localStorage.getItem('rec_url');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(rec_url);
                const { recipe } = await response.json();
                setData(recipe);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };
        fetchData();
    }, [rec_url]);

    return (
        <div>
            {data && (
                <div>
                    <h2>Recipe {data.label}</h2>
                    <p>Calories: {data.calories.toFixed(1)}</p>
                    <p>Cautions: {data.cautions}</p>
                    <p>Cuisine Type: {data.cuisineType}</p>
                    <p>Diet Labels: {data.dietLabels}</p>
                    <ul className="flex flex-wrap justify-center gap-5">
                        {data.digest.map((item: any, index: number) => (
                            <li className="w-32" key={index}>
                                <strong>{item.label}</strong>
                                <p>
                                    {item.total.toFixed(1)} {item.unit}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap">
                        {data.healthLabels.map((h: any, i: any) => (
                            <p key={i}>
                                {h}
                                {','}
                            </p>
                        ))}
                    </div>
                    <div>
                        <h3>Main Image</h3>
                        <Image src={data.image} alt="Large Image" width="400" height="400" />
                    </div>
                    <div className="flex flex-wrap gap-5 md:grid md:grid-cols-5">
                        {data.ingredientLines.map((item: any, index: number) => (
                            <p className="w-32" key={index}>
                                - {item}
                            </p>
                        ))}
                    </div>
                    <div>
                        <h2>Ингредиент:</h2>
                        <ul>
                            {data.ingredients.map((ingredient: any, index: any) => (
                                <li className="mb-5" key={index}>
                                    <p>#{index + 1}</p>
                                    <p>Название: {ingredient.food}</p>
                                    <p>Категория: {ingredient.foodCategory}</p>
                                    <p>
                                        Изображение:{' '}
                                        <Image
                                            src={ingredient.image}
                                            alt={ingredient.food}
                                            width="400"
                                            height="400"
                                        />
                                    </p>
                                    <p>Единица измерения: {ingredient.measure}</p>
                                    <p>Количество: {ingredient.quantity}</p>
                                    <p>Текст: {ingredient.text}</p>
                                    <p>Вес: {ingredient.weight}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2>Общие питательные вещества:</h2>
                        <ul>
                            {Object.entries(data.totalNutrients).map(
                                ([key, nutrient]: any) => (
                                    <li key={key}>
                                        <p>
                                            {nutrient.label} {nutrient.quantity}{' '}
                                            {nutrient.unit}{' '}
                                            <span className="text-xs">[{key}]</span>
                                        </p>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipesPage;
