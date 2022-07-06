import React from 'react';
import styles from './Nav.module.scss';

export default function Nav() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <img src="./coffeetype-logo.svg" />
                    <h1>coffeetype</h1>
                </div>
                <nav>
                    <div className="language"></div>
                    <div className="seconds">
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
