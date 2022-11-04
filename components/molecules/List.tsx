import menu from 'assets/menu.png'
import Image from "next/image";
import Button from "../atoms/Button";

type Props = {
    title: string,
    children: any,
};

const List = ({children, title}: Props) => (
    <div className="bg-[#ebecf0] text-sm text-[#313131] rounded-[3px] w-[272px]">
        <div className="flex px-[8px] pt-[10px] pb-[8px] justify-between">
            <div className="px-[8px] leading-[26px] font-semibold">
                {title}
            </div>
            <div title="Supprimer cette liste"
                 className="mt-[-4px] h-[32px] w-[32px] rounded-[3px] hover:bg-[#091e4221] cursor-pointer leading-none">
                <div className="h-full w-full flex justify-center items-center">
                    <Image src={menu} alt="menu" height={3}/>
                </div>
            </div>
        </div>
        <div className="px-[8px] flex flex-col gap-2">
            {children}
        </div>
        <div className="p-[8px]">
            <Button type="secondary">Ajouter une autre carte</Button>
        </div>
    </div>
);

export default List