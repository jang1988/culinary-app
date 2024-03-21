'use client';
import { NextPage } from 'next';
import FoodMainCard from '@/components/foodMainCard';
import { useEffect, useState } from 'react';
import FoodCard from '@/components/foodCard';
import { Input } from '@/components/ui/input';

interface Props {}

const FoodPage: NextPage<Props> = ({}) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.edamam.com/api/food-database/v2/parser?app_id=13df9f74&app_key=db48119bb671fe8750233ef904a453b0&ingr=${searchValue}`,
                );
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (searchValue !== '') {
            fetchData();
        } else {
            setData(null);
        }
    }, [searchValue]);

    return (
        <div className="container mx-auto mt-4">
            <Input
                className="mb-5"
                type="text"
                placeholder="search food"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            {data?.parsed[0] && <FoodMainCard data={data.parsed[0].food} />}
            {data?.hints && <FoodCard data={data.hints} />}
        </div>
    );
};

export default FoodPage;
