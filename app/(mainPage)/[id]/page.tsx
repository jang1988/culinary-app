'use client';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

interface Props {}

interface Recipe {
    uri: string;
}

const CategoruItemPage: NextPage<Props> = ({ params }: any) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fishResponse = await fetch(
                    'https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=fish&diet=low-fat',
                );
                const meatResponse = await fetch(
                    'https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=meat&health=kosher',
                );
                const allResponse = await fetch(
                    'https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=all',
                );

                const [fishData, meatData, allData] = await Promise.all([
                    fishResponse.json(),
                    meatResponse.json(),
                    allResponse.json(),
                ]);

                const fishRecipes = fishData.hits.map((hit: any) => hit.recipe);
                const meatRecipes = meatData.hits.map((hit: any) => hit.recipe);
                const allRecipes = allData.hits.map((hit: any) => hit.recipe);

                setRecipes([...allRecipes, ...fishRecipes, ...meatRecipes]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(true);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    const foundRecipe = recipes.find((recipe) => recipe.uri.split('#')[1] === params.id);

    if (foundRecipe) {
        console.log('Найденный объект:', foundRecipe);
        return <div>age</div>;
    } else {
        console.log('Объект с URI', params.id, 'не найден.');
        return <div>Error</div>;
    }
};

export default CategoruItemPage;
