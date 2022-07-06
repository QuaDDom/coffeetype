import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Page/Nav';
import TestWords from '../components/TestWords';
import styles from '../styles/index.module.scss';

const Home: NextPage = () => {
    return (
        <div className={`${styles.container} mkbhd`}>
            <Nav />
            <TestWords />
        </div>
    );
};

export default Home;
