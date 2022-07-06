import React from 'react';
import styles from './RestartGame.module.scss';
import { IoReload } from 'react-icons/io5';

interface Props {
    startNewGame: () => void;
}

export default function RestartGame({ startNewGame }: Props) {
    return (
        <div className={styles.restartGameContainer}>
            <div className={styles.button} onClick={startNewGame}>
                <span>
                    <IoReload />
                </span>
            </div>
        </div>
    );
}
