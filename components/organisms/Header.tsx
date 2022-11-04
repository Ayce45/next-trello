import Image from "next/image";

import trello from 'assets/trello.png'

const Header = () => (
    <header>
        <nav className="flex justify-center items-center bg-[#111111] w-full h-[40px]">
            <div className="h-[30px] flex items-center justify-center">
                <Image src={trello} alt="Trello Logo" className="cursor-pointer opacity-50 hover:opacity-80 !min-h-[30px] !min-w-[80px]" />
            </div>
        </nav>
    </header>
);

export default Header