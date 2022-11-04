import List from "../molecules/List";
import Card from "../atoms/Card";
import Button from "../atoms/Button";
import {Key, useState} from "react";
import Image from "next/image";

import crossDark from "assets/cross-dark.png";

type Props = {
    items: any,
    addList: any,
    removeList: any,
    addCard: any,
    followCard: any,
    removeCard: any,
    descriptionCard: any
};

const ListContainer = ({items, addList, removeList, addCard, followCard, removeCard, descriptionCard}: Props) => {
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        addList(event.target.title.value)
    }

    return (
        <div className="flex items-start mt-[6px] gap-2">
            {items.map((list: { id: any; title: string; cards: any[]; }, index: Key) =>
                <List title={list.title} key={index} id={list.id} removeList={removeList} addCard={addCard}>
                    {list.cards.map((card, index) =>
                        <Card key={index} title={card.title} description={card.description} follow={card.follow}
                              list={list.title} followCard={followCard} removeCard={removeCard} descriptionCard={descriptionCard} id={card.id} listId={list.id}/>
                    )}
                </List>
            )}
            <form onSubmit={handleSubmit}
                  className={(showForm ? 'bg-[#ebecf0] p-[4px]' : 'bg-[#ffffff3d] hover:bg-[#ffffff52]') + " rounded-[3px] flex flex-col w-[272px]"}
            >

                {showForm &&
                    <>
                        <input placeholder="Saisissez le titre de la liste…" type="text" name="title" id="title"
                               className="shadow-[rgb(0_121_191)_0px_0px_0px_2px_inset] border-[0px] border-transparent h-[36px] px-[12px] rounded-[3px] placeholder:text-[13.33px] outline-none placeholder:text-gray-500 pl-[13px]"/>
                        <div className="mt-1 flex items-center gap-3">
                            <Button type="primary" action="submit">Ajouter une liste</Button>
                            <button
                                onClick={() => setShowForm(false)}
                            >
                                <Image src={crossDark} alt="cross" className="opacity-50 hover:opacity-100 transition"/>
                            </button>
                        </div>
                    </>
                }
                {!showForm &&
                    <Button type="tertiary" action="button" click={() => setShowForm(true)}>Ajouter une autre
                        liste</Button>
                }
            </form>
        </div>
    );
}

export default ListContainer