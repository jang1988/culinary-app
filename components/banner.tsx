import { NextPage } from 'next';
import Image from 'next/image';

interface Props {}

const Banner: NextPage<Props> = ({}) => {
    return (
        <div className="relative my-5">
    <Image
        className="mx-auto max-h-80 rounded-md"
        src="/banner.jpg"
        alt="Welcome Banner Image"
        width={1000}
        height={300}
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white drop-shadow-[10px_0px_5px_rgba(0,0,0,1)]">
        <h1 className="text-4xl font-bold text-orange-600 hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-300">Добро пожаловать!</h1>
        <p className="text-lg drop-shadow-[10px_0px_5px_rgba(0,0,0,1)]">Выберите категорию еды ниже:</p>
    </div>
</div>
    );
};

export default Banner;
