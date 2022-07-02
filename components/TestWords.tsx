import React, { useEffect, useState } from 'react';
import { useNewGame } from '../hooks/useNewGame';
import styles from './TestWords.module.scss';

export default function TestWords() {
    const [time, setTime] = useState(0);
    const [mistakes, setMistakes] = useState(0);

    const text = useNewGame();

    return (
        <div className={styles.containerWords}>
            <div className={styles.stats}>
                <p>
                    Time: <span>{time}s</span>
                </p>
                <p>Mistakes: {mistakes}</p>
            </div>
            <div className={styles.quote}>
                <span>{text}</span>
            </div>
        </div>
    );
}
