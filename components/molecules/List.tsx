import Image from "next/image";
import Button from "../atoms/Button";
import {useState} from "react";

import menu from 'assets/menu.png'
import crossDark from "assets/cross-dark.png";

type Props = {
    id: number,
    title: string,
    children: any,
    removeList: any,
    addCard: any,
};

const List = ({id, children, title, removeList, addCard}: Props) => {
    const [showForm, setShowForm] = useState(false);

    const handlerRemove = async (event: any) => {
        event.preventDefault()
        if (confirm(`Vous allez supprimer la liste nommée ${title}.\nAppuyer sur \"OK\" pour continuer.\nOu sur \"Annuler\" pour fermer.\n`)) removeList(id)
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        addCard(id, event.target.title.value)
    }

    return (
        <div className="bg-[#ebecf0] text-sm text-[#313131] rounded-[3px] w-[272px]">
            <div className="flex px-[8px] pt-[10px] pb-[8px] justify-between">
                <div className="px-[8px] leading-[26px] font-semibold">
                    {title}
                </div>
                <div title="Supprimer cette liste"
                     className="mt-[-4px] h-[32px] w-[32px] rounded-[3px] hover:bg-[#091e4221] cursor-pointer leading-none">
                    <div className="h-full w-full flex justify-center items-center" onClick={handlerRemove}>
                        <Image src={menu} alt="menu" height={3}/>
                    </div>
                </div>
            </div>
            <div className="px-[8px] flex flex-col gap-2">
                {children}
            </div>
            <form onSubmit={handleSubmit} className="p-[8px]">
                {!showForm &&
                    <Button click={() => setShowForm(true)}
                            type="secondary">{children.length ? "Ajouter une autre carte" : "Ajouter une carte"}</Button>}
                {showForm &&
                    <>
                        <textarea name="title" id="title" placeholder="Saisissez un titre pour cette carte…" className="appearance-none w-full p-[8px] placeholder:text-gray-500 min-h-[72px] shadow-[rgb(9_30_66_/_25%)_0px_1px_0px] outline-none"></textarea>
                        <div className="mt-[3px] flex items-center gap-3">
                            <Button type="primary" action="submit">Ajouter une carte</Button>
                            <button
                                onClick={() => setShowForm(false)}
                            >
                                <Image src={crossDark} alt="cross" className="opacity-50 hover:opacity-100 transition"/>
                            </button>
                        </div>
                    </>
                }
            </form>
        </div>
    );
}

export default List