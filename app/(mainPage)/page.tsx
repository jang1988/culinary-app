"use client"
import Banner from "@/components/banner";
import MainCategory from "@/components/mainCategory";
import { useEffect, useState } from "react";

export default function Home() {
    const [fishRecipes, setFishRecipes] = useState([]);
    const [meatRecipes, setMeatRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=fish&diet=low-fat'
        );
        const data = await response.json();
        setFishRecipes(data.hits.map((hit: any) => hit.recipe));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=meat&health=kosher'
        );
        const data = await response.json();
        setMeatRecipes(data.hits.map((hit: any) => hit.recipe));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    return (
        <div>
            <Banner />
            <MainCategory recipes={fishRecipes} name={'Fish'} />
            <MainCategory recipes={meatRecipes} name={'Meat'} />
        </div>
    );
}
