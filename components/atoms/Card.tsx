import Image from "next/image";
import {useState} from "react";
import Button from "./Button";

import eye from 'assets/eye.png'
import paragraph from 'assets/paragraph.png'
import cross from 'assets/cross.png'
import crossDark from 'assets/cross-dark.png'

type Props = {
    id: number,
    title: string,
    list: string,
    listId: number,
    description?: string,
    follow: boolean,
    followCard: any,
    removeCard: any,
    descriptionCard: any,
};

const Card = ({id, title, list, listId, description, follow, followCard, removeCard, descriptionCard}: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [showForm, setShowForm] = useState(false);


    const handleFollowCard = (event: any) => {
        event.preventDefault()
        followCard(listId, id, !follow)
    }

    const handleRemoveCard = (event: any) => {
        event.preventDefault()
        if (confirm(`Vous allez supprimer la carte nommée ${title}.\nAppuyer sur \"OK\" pour continuer.\nOu sur \"Annuler\" pour fermer.\n`)) {
            removeCard(listId, id)
            setShowModal(false)
        }
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        descriptionCard(listId, id, event.target.description.value)
        setShowForm(false)
    }

    return (
        <>
            {/* CARD */}
            <button
                id={"card-" + id}
                className="shadow-[rgb(9_30_66_/_25%)_0px_1px_0px] h-auto bg-white rounded-[3px] hover:bg-transparent"
                onClick={() => setShowModal(true)}>
                <div
                    className="flex font-sm leading-[20px] h-[32px] m-0 px-[8px] items-center text-[#313131] font-arial w-full">{title}</div>

                {(follow || description) &&
                    <div className="px-[13px] pt-[2px] h-[22px] flex items-start gap-[10px]">
                        {follow &&
                            <Image src={eye} alt="eye"/>}
                        {description &&
                            <div className="flex items-start pt-[1px]">
                                <Image src={paragraph} alt="paragraph"/>
                            </div>}
                    </div>}
            </button>
            {/* MODAL */}
            {showModal && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <div className="relative w-auto my-6 mx-auto w-[768px]">
                            <div
                                className="border-0 rounded-[3px] shadow-lg relative flex flex-col w-full bg-[#f4f5f7] outline-none focus:outline-none px-[24px] py-[11px]"
                                onClick={(e) => e.stopPropagation()}>
                                {/* HEADER */}
                                <div className="mt-[-3px]">
                                    <h3 className="text-[20px] font-semibold flex items-center h-[37px] mt-[2px] mb-[1px]">
                                        {title}
                                    </h3>
                                    <div className="flex items-center gap-1 mt-[-2px]">
                                        Dans la liste <span className="underline">{list}</span>
                                        {follow &&
                                            <Image src={eye} alt="eye" className="ml-[1.1px]"/>}
                                    </div>
                                    <button
                                        id="close"
                                        onClick={() => setShowModal(false)}
                                        className="absolute top-[6px] right-[5px] rounded-full hover:bg-[#091e4214] hover:brightness-50 h-[30px] w-[30px]"
                                    >
                                        <Image src={cross} alt="cross"/>
                                    </button>
                                </div>
                                {/* FORM */}
                                <div className="flex gap-5 mb-[20px]">
                                    <div className="grow">
                                        <div className="text-[18px] font-semibold mt-[25px]">Description</div>
                                        {!description && !showForm ? <div id="showDescriptionForm" onClick={() => setShowForm(true)}
                                                                          className="bg-[#091e420a] h-[50px] rounded-[3px] cursor-pointer py-[8px] px-[12px] mt-[11px] cursor-pointer">
                                            Ajouter une description plus détaillée…
                                        </div> : !showForm && <div id="showDescriptionForm" className="mt-[11px] cursor-pointer"
                                                                   onClick={() => setShowForm(true)}>{description}</div>}
                                        {showForm &&
                                            <form onSubmit={handleSubmit}>
                                                <textarea autoFocus name="description" id="description"
                                                          placeholder="Ajouter une description plus détaillée…"
                                                          className="appearance-none w-full p-[12px] placeholder:text-gray-500 shadow-[rgb(9_30_66_/_13%)_0px_0px_0px_1px_inset] outline-none focus:shadow-[rgb(0_121_191)_0px_0px_0px_2px_inset] rounded-[3px] h-[62px] mt-[11px]" defaultValue={description}></textarea>
                                                <div className="mt-[3px] flex items-center gap-3">
                                                    <Button id="save" type="primary" action="submit">Enregistrer</Button>
                                                    <button
                                                        className="flex items-center"
                                                        onClick={() => setShowForm(false)}
                                                    >
                                                        <Image src={crossDark} alt="cross"
                                                               className="opacity-50 hover:opacity-100 transition"/>
                                                    </button>
                                                </div>
                                            </form>
                                        }
                                    </div>
                                    {/* ACTIONS */}
                                    <div className="w-[170px]">
                                        <div className="text-[18px] font-semibold leading-[32px] mt-[19px]">Actions
                                        </div>
                                        <div className="flex flex-col gap-2 mt-[9px]">
                                            <Button id="follow" type="follow" checked={follow}
                                                    click={handleFollowCard}>Suivre</Button>
                                            <Button id="delete" type="delete" click={handleRemoveCard}>Supprimer</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-[0.64] fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    )
};

export default Card