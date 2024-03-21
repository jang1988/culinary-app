import Image from 'next/image';
import Link from 'next/link';

const FoodCard: React.FC<{ data: any }> = ({ data }) => {
    if (!data) {
        return <div>LOADING</div>;
    }

    return (
        <div className="flex flex-wrap justify-around items-center gap-5">
            {data.map((v: any, i: any) => {
                return (
                    <div key={i} className="max-w-[200px] h-[400px] px-6 py-4 shadow-lg rounded-lg">
                        <Link href={`/food/${v.food.foodId}`}>
                        <Image
                            src={
                                v?.food.image ||
                                'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                            }
                            alt={v.food.label}
                            width={200}
                            height={200}
                        /></Link>
                        <div className="font-bold text-xl mb-2">{v.food.category}</div>
                        <p className="text-gray-700 text-base">
                            Category: {v.food.categoryLabel}
                        </p>
                        <p className="text-gray-700 text-base">Label: {v.food.label}</p>
                        <p className="text-gray-700 text-base">Known As: {v.food.knownAs}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default FoodCard;
