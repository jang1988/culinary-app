'use client';
import RecipeCard from '@/components/recipeCard';
import { Input } from '@/components/ui/input';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

interface Props {}

const RecipesPage: NextPage<Props> = () => {
    const [data, setData] = useState<any>(null);
    const [searchValue, setSearchValue] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.edamam.com/api/recipes/v2?app_id=5d9ce44e&app_key=05262688e12d463b3b4a080f14bb0f5c&type=public&q=${searchValue}`,
                );
                const { hits } = await response.json();
                setData(hits);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };
        if (searchValue !== '') {
            fetchData();
        } else {
            setData(null);
        }
    }, [searchValue]);

    return (
        <div className="container mx-auto mt-4 flex flex-wrap justify-around gap-5">
            <Input
                className="mb-5"
                type="text"
                placeholder="search recipes"
                value={searchValue}
                onChange={(e: any) => setSearchValue(e.target.value)}
            />
            <RecipeCard data={data} />
        </div>
    );
};

export default RecipesPage;
