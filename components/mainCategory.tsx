import { NextPage } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';

interface Recipe {
    uri: string;
    label: string;
    image: string;
    calories: number;
    ingredients: { text: string }[];
    url: string;
}

interface Props {
    recipes: Recipe[];
    name: string;
}

const MainCategory: NextPage<Props> = ({ recipes, name }) => {
    return (
        <div className="mb-10">
            <Carousel
                opts={{
                    align: 'start',
                }}
                className="w-[70%] md:min-w-[80%] max-w-sm mx-auto"
            >
                <h3 className="font-bold">{name}</h3>
                <CarouselContent className="p-0">
                    {recipes.map((recipe, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                            <div className="">
                                <Link href={`/${recipe.uri.split('#')[1]}`}>
                                <Card>
                                    <CardContent className="relative flex aspect-square items-center justify-center p-0">
                                        <Image
                                            src={recipe.image}
                                            alt={recipe.label}
                                            width={500}
                                            height={500}
                                            className="rounded-md"
                                        />
                                        <p className="absolute bottom-0 left-0 right-0 text-white text-center p-2 drop-shadow-[0px_0px_1px_rgba(0,0,0,1)]">
                                            {recipe.label}
                                        </p>
                                    </CardContent>
                                </Card></Link>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default MainCategory;
