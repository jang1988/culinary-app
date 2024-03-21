import Image from 'next/image';

const FoodMainCard: React.FC<{ data: any }> = ({ data }) => {

    if (!data) {
        return <div>LOADING</div>;
    }

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex mb-5">
            <Image src={data.image} alt={data.label} width={300} height={300} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.label}</div>
                <p className="text-gray-700 text-base">Category: {data.categoryLabel}</p>
                <p className="text-gray-700 text-base">Known As: {data.knownAs}</p>
                <div className="mt-4">
                    <p className="text-gray-700 text-base">Nutrients:</p>
                    <ul>
                        <li>Carbohydrates (CHOCDF): {data.nutrients.CHOCDF}g</li>
                        <li>Calories (ENERC_KCAL): {data.nutrients.ENERC_KCAL}kcal</li>
                        <li>Fat (FAT): {data.nutrients.FAT}g</li>
                        <li>Fiber (FIBTG): {data.nutrients.FIBTG}g</li>
                        <li>Protein (PROCNT): {data.nutrients.PROCNT}g</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FoodMainCard;
