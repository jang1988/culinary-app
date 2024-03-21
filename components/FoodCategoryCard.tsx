import { NextPage } from 'next';

interface Props {}

const FoodCategoryCard: NextPage<Props> = ({}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 m-4">
            <h2 className="text-xl font-semibold">{}</h2>
            {/* Здесь можно добавить изображение или другие детали категории */}
        </div>
    );
};

export default FoodCategoryCard;
