import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react/cjs/react.development";
import hot_pot from "../assets/images/hot_pot.png";

export default function App({ data }) {
    const [getStarted, setGetStarted] = useState(false);
    const [dataState, setDataState] = useState([
        "Maggi",
        "Pizza",
        "Burger",
        "Hot Pot",
    ]);

    useEffect(() => {
        setDataState(data);
    }, [data]);

    const handleClick = (e) => {
        setGetStarted(true);
    };

    return (
        <div className="App">
            <Head>
                <title>Recipe App</title>
                <link rel="icon" href="../assets/images/mango.ico" />
            </Head>
            <div className="bg-green-200 w-screen h-screen">
                <div className="flex justify-center items-center h-screen">
                    {!getStarted ? (
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex text-center p-5 items-center h-40 w-40">
                                    <Image
                                        src={hot_pot}
                                        alt="Logo"
                                        width={512}
                                        height={512}
                                    />
                                </div>
                                <h1 className="font-extrabold text-2xl text-center">
                                    Welcome to Mango
                                </h1>
                                <h3 className="font-semibold text-center pb-5">
                                    A recipe app for you to save your favourite
                                    recipes
                                </h3>
                                <button
                                    onClick={handleClick}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                                >
                                    See Recipe List
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>List Goes Here</>
                    )}
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    return {
        props: { data }, // will be passed to the page component as props
    };
}
