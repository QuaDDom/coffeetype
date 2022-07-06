import React from 'react';
import styles from './Nav.module.scss';
import { BiTime, BiWorld } from 'react-icons/bi';

export default function Nav() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <img src="./coffeetype-logo.svg" />
                    <h1>coffeetype</h1>
                </div>
                <nav>
                    <div className={styles.language}>
                        <span>
                            <BiWorld />
                        </span>
                        <p>English</p>
                        <p>Spanish</p>
                        <p>Franch</p>
                        <p>Italian</p>
                    </div>
                    <div className={styles.seconds}>
                        <span>
                            <BiTime />
                        </span>
                        <p>15</p>
                        <p>30</p>
                        <p>60</p>
                        <p>120</p>
                        <p>Custom</p>
                    </div>
                </nav>
            </div>
        </div>
    );
}
