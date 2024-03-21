import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto">
                <ul className="flex justify-between items-center">
                    <li>
                        <Link className="text-white hover:text-gray-300 px-4" href="/">
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link className="text-white hover:text-gray-300 px-4" href="/recipes">
                            Рецепты
                        </Link>
                    </li>
                    <li>
                        <Link className="text-white hover:text-gray-300 px-4" href="/food">
                            Продукты питания
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
