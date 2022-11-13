import Head from 'next/head'
import { useEffect, useState } from 'react'
import Image from "next/image"
import lolwalpaper from '../imagenes/lolwalpaper.png'
import styles from '../styles/Home.module.css'
import { Network, Alchemy } from 'alchemy-sdk';
import { createAlchemyWeb3 } from '@alch/alchemy-web3'
import contractABI from './contract-abi.json'

export default function Torneo() {
    const [wallet, setWallet] = useState('');
    /*const [status, setStatus] = useState("");
    const [message, setMessage] = useState("No connection to the network.");
    const [newMessage, setNewMessage] = useState("");*/

    const settings = {
        apiKey: "TfcNRE6_YWRFnFBkMdvYQ__yFUlpDXm-",
        network: Network.ETH_GOERLI,
    };

    const alchemy = new Alchemy(settings);

    async function GetBlock() {
        const latestBlock = await alchemy.core.getBlockNumber();
        console.log("The latest block number is", latestBlock);
    }

    useEffect(() => {
        if (wallet !== '') {
            GetBlock();
        }
    }, [wallet])

    //require('dotenv').config();
    const alchemykey = 'wss://eth-goerli.g.alchemy.com/v2/TfcNRE6_YWRFnFBkMdvYQ__yFUlpDXm-'
    const web3 = createAlchemyWeb3(alchemykey);

    const myContract = new web3.eth.Contract(
        contractABI,
        "0xd9145CCE52D386f254917e481eB44e9943F39138"
    );
    console.log(myContract)

    return (
        <>
        <span>{wallet}</span>
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.grid}>
                    <button
                        onClick={
                            () => {
                                ethereum.request({ method: 'eth_requestAccounts' }).
                                    then(wallet => setWallet(wallet[0]));
                            }
                        }
                        className={styles.card}>
                        <h2>Inscribirse &rarr;</h2>
                        <Image
                            src={lolwalpaper}
                            alt=''
                            width={1920 / 8}
                            height={1080 / 8}

                        />
                        
                        <p>Estas a un paso de ser un campeon hdtp</p>

                    </button>
                    <button
                        onClick={
                            () => {
                                ethereum.request({ method: 'eth_requestAccounts' }).
                                    then(wallet => setWallet(wallet[0]));
                            }
                        }
                        className={styles.card}>
                        <h2>Inscribirse &rarr;</h2>
                        <Image
                            src={lolwalpaper}
                            alt=''
                            width={1920 / 8}
                            height={1080 / 8}

                        />
                        
                        <p>Estas a un paso de ser un campeon hdtp</p>

                    </button>
                    <button
                        onClick={
                            () => {
                                ethereum.request({ method: 'eth_requestAccounts' }).
                                    then(wallet => setWallet(wallet[0]));
                            }
                        }
                        className={styles.card}>
                        <h2>Inscribirse &rarr;</h2>
                        <Image
                            src={lolwalpaper}
                            alt=''
                            width={1920 / 8}
                            height={1080 / 8}

                        />
                        
                        <p>Estas a un paso de ser un campeon hdtp</p>

                    </button>
                    <button
                        onClick={
                            () => {
                                ethereum.request({ method: 'eth_requestAccounts' }).
                                    then(wallet => setWallet(wallet[0]));
                            }
                        }
                        className={styles.card}>
                        <h2>Inscribirse &rarr;</h2>
                        <Image
                            src={lolwalpaper}
                            alt=''
                            width={1920 / 8}
                            height={1080 / 8}

                        />
                        
                        <p>Estas a un paso de ser un campeon hdtp</p>

                    </button>
                </div>
            </div>

        </>
    )
}
