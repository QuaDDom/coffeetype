import React from 'react';
import styles from './RestartGame.module.scss';
import { VscDebugRestart } from 'react-icons/vsc';

export default function RestartGame() {
    return (
        <div className={styles.restartGameContainer}>
            <div className={styles.button}>
                <span>
                    <VscDebugRestart />
                </span>
            </div>
        </div>
    );
}
