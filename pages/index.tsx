import type {NextPage} from 'next'
import Head from 'next/head'
import Header from "../components/organisms/Header";
import Button from "../components/atoms/Button";
import ListContainer from "../components/organisms/ListContainer";
import {useState} from "react";
import {dataset} from "../data/dataset";

const Home: NextPage = () => {
    const [items, setItems] = useState(dataset)

    const handleAddList = (title: string) => {
        setItems((prevItems: any) => [
            ...prevItems,
            {
                id: prevItems.length + 1,
                title: title,
                cards: []
            }
        ]);
    };

    const handleRemoveList = (id: number) => {
        setItems((prevItems: any) => prevItems.filter((items: { id: number; }) => (items.id !== id)));
    };

    const handleAddCard = (id: number, title: string,) => {
        setItems((prevItems: any) => {
            let newItems = [...prevItems]
            let list = newItems.find((item: { id: number; }) => item.id === id)
            list.cards = [...list.cards, {
                id: list.cards.length + 1,
                title: title,
                description: '',
                follow: false
            }]

            return newItems
        })
    };

    const handleFollowCard = (idList: number, idCard: number, follow: boolean) => {
        setItems((prevItems: any) => {
            let newItems = [...prevItems]
            let list = newItems.find((item: { id: number; }) => item.id === idList)
            let card = list.cards.find((card: { id: number; }) => card.id === idCard)
            card.follow = follow

            return newItems
        })
    };

    const handleDescriptionCard = (idList: number, idCard: number, description: string) => {
        setItems((prevItems: any) => {
            let newItems = [...prevItems]
            let list = newItems.find((item: { id: number; }) => item.id === idList)
            let card = list.cards.find((card: { id: number; }) => card.id === idCard)
            card.description = description

            return newItems
        })
    };

    const handleRemoveCard = (idList: number, idCard: number) => {
        setItems((prevItems: any) => {
            let newItems = [...prevItems]
            let list = newItems.find((item: { id: number; }) => item.id === idList)
            list.cards = list.cards.filter((card: { id: number; }) => card.id !== idCard)

            return newItems
        })
    };

    const resetData = () => {
        setItems(() => dataset)
        console.log('reset')
    }

    return (
        <div className="min-h-screen bg-[#838c91]">
            <Head>
                <title>Next Trello</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>

            {/* NAV HEADER */}
            <Header/>

            <main className="p-[8px]">
                {/* MAIN HEADER */}
                <div className="flex gap-5">
                    <h1 className="text-white text-lg font-bold ml-[12px] mt-[2px] h-[32px]">Tableau principal</h1>
                    <Button id="initDataset" type="primary" action="button" click={resetData}>Initialiser le jeu de données</Button>
                </div>
                {/* LIST CONTAINER */}
                <ListContainer items={items}
                               addList={handleAddList}
                               removeList={handleRemoveList}
                               addCard={handleAddCard}
                               followCard={handleFollowCard}
                               removeCard={handleRemoveCard}
                               descriptionCard={handleDescriptionCard}
                />
            </main>
        </div>
    )
}

export default Home
