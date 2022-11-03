import type {NextPage} from 'next'
import Head from 'next/head'
import Header from "../components/organisms/Header";

const Home: NextPage = () => {
    return (
        <div className="min-h-screen bg-[#838c91]">
            <Head>
                <title>Next Trello</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>

            <Header/>

            <main className="p-[8px] flex gap-5">
                <h1 className="text-white text-lg font-bold ml-[12px] mt-[2px] h-[32px]">Tableau principal</h1>
                <button className="bg-[#5aac44] text-white rounded text-sm font-arial px-3">Initialiser le jeu de données</button>
            </main>
        </div>
    )
}

export default Home
