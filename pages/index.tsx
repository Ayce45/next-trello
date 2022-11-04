import type {NextPage} from 'next'
import Head from 'next/head'
import Header from "../components/organisms/Header";
import Button from "../components/atoms/Button";
import ListContainer from "../components/organisms/ListContainer";

const Home: NextPage = () => {
    return (
        <div className="min-h-screen bg-[#838c91]">
            <Head>
                <title>Next Trello</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>

            <Header/>

            <main className="p-[8px]">
                <div className="flex gap-5">
                    <h1 className="text-white text-lg font-bold ml-[12px] mt-[2px] h-[32px]">Tableau principal</h1>
                    <Button type="primary">Initialiser le jeu de données</Button>
                </div>
                <ListContainer />
            </main>
        </div>
    )
}

export default Home
