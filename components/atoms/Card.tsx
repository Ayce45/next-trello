import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';

import eye from 'assets/eye.png';
import paragraph from 'assets/paragraph.png';
import cross from 'assets/cross.png';
import crossDark from 'assets/cross-dark.png';

type Props = {
  id: number;
  title: string;
  list: string;
  listId: number;
  description?: string;
  follow: boolean;
  followCard: any;
  removeCard: any;
  descriptionCard: any;
};

const Card = ({
  id,
  title,
  list,
  listId,
  description,
  follow,
  followCard,
  removeCard,
  descriptionCard,
}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleFollowCard = (event: any) => {
    event.preventDefault();
    followCard(listId, id, !follow);
  };

  const handleRemoveCard = (event: any) => {
    event.preventDefault();
    if (
      confirm(
        `Vous allez supprimer la carte nommée ${title}.\nAppuyer sur "OK" pour continuer.\nOu sur "Annuler" pour fermer.\n`
      )
    ) {
      removeCard(listId, id);
      setShowModal(false);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    descriptionCard(listId, id, event.target.description.value);
    setShowForm(false);
  };

  return (
    <>
      {/* CARD */}
      <button
        id={'card-' + id}
        className="h-auto rounded-[3px] bg-white shadow-[rgb(9_30_66_/_25%)_0px_1px_0px] hover:bg-transparent"
        onClick={() => setShowModal(true)}
      >
        <div className="font-sm font-arial m-0 flex h-[32px] w-full items-center px-[8px] leading-[20px] text-[#313131]">
          {title}
        </div>

        {(follow || description) && (
          <div className="flex h-[22px] items-start gap-[10px] px-[13px] pt-[2px]">
            {follow && <Image src={eye} alt="eye" />}
            {description && (
              <div className="flex items-start pt-[1px]">
                <Image src={paragraph} alt="paragraph" />
              </div>
            )}
          </div>
        )}
      </button>
      {/* MODAL */}
      {showModal && (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-scroll outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative my-6 mx-auto w-[768px]">
              <div
                className="relative flex w-full flex-col rounded-[3px] border-0 bg-[#f4f5f7] px-[24px] py-[11px] shadow-lg outline-none focus:outline-none"
                onClick={(e) => e.stopPropagation()}
              >
                {/* HEADER */}
                <div className="mt-[-3px]">
                  <h3 className="mt-[2px] mb-[1px] flex h-[37px] items-center text-[20px] font-semibold">
                    {title}
                  </h3>
                  <div className="mt-[-2px] flex items-center gap-1">
                    Dans la liste <span className="underline">{list}</span>
                    {follow && (
                      <Image src={eye} alt="eye" className="ml-[1.1px]" />
                    )}
                  </div>
                  <button
                    id="close"
                    onClick={() => setShowModal(false)}
                    className="absolute top-[6px] right-[5px] h-[30px] w-[30px] rounded-full hover:bg-[#091e4214] hover:brightness-50"
                  >
                    <Image src={cross} alt="cross" />
                  </button>
                </div>
                {/* FORM */}
                <div className="mb-[20px] flex gap-5">
                  <div className="grow">
                    <div className="mt-[25px] text-[18px] font-semibold">
                      Description
                    </div>
                    {!description && !showForm ? (
                      <div
                        id="showDescriptionForm"
                        onClick={() => setShowForm(true)}
                        className="mt-[11px] h-[50px] cursor-pointer rounded-[3px] bg-[#091e420a] py-[8px] px-[12px]"
                      >
                        Ajouter une description plus détaillée…
                      </div>
                    ) : (
                      !showForm && (
                        <div
                          id="showDescriptionForm"
                          className="mt-[11px] cursor-pointer"
                          onClick={() => setShowForm(true)}
                        >
                          {description}
                        </div>
                      )
                    )}
                    {showForm && (
                      <form onSubmit={handleSubmit}>
                        <textarea
                          autoFocus
                          name="description"
                          id="description"
                          placeholder="Ajouter une description plus détaillée…"
                          className="mt-[11px] h-[62px] w-full appearance-none rounded-[3px] p-[12px] shadow-[rgb(9_30_66_/_13%)_0px_0px_0px_1px_inset] outline-none placeholder:text-gray-500 focus:shadow-[rgb(0_121_191)_0px_0px_0px_2px_inset]"
                          defaultValue={description}
                        ></textarea>
                        <div className="mt-[3px] flex items-center gap-3">
                          <Button id="save" type="primary" action="submit">
                            Enregistrer
                          </Button>
                          <button
                            className="flex items-center"
                            onClick={() => setShowForm(false)}
                          >
                            <Image
                              src={crossDark}
                              alt="cross"
                              className="opacity-50 transition hover:opacity-100"
                            />
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                  {/* ACTIONS */}
                  <div className="w-[170px]">
                    <div className="mt-[19px] text-[18px] font-semibold leading-[32px]">
                      Actions
                    </div>
                    <div className="mt-[9px] flex flex-col gap-2">
                      <Button
                        id="follow"
                        type="follow"
                        checked={follow}
                        click={handleFollowCard}
                      >
                        Suivre
                      </Button>
                      <Button
                        id="delete"
                        type="delete"
                        click={handleRemoveCard}
                      >
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-[0.64]"></div>
        </>
      )}
    </>
  );
};

export default Card;
