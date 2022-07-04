import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useNewGame } from '../hooks/useNewGame';
import styles from './TestWords.module.scss';

export default function TestWords() {
    const [time, setTime] = useState(0);
    const [mistakes, setMistakes] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [textState, setTextState] = useState(['']);

    //References
    const gameRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
    const wordRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        gameRef?.current.addEventListener('keyup', (letter: any) => {
            console.log(letter.key);
        });
    }, []);

    const text: [string] = useNewGame();

    useEffect(() => {
        setTextState(text);
    }, [text]);

    return (
        <div className={styles.containerWords}>
            <div className={styles.stats}>
                <p>{speed}</p>
                <p>
                    Time: <span>{time}s</span>
                </p>
                <p>Mistakes: {mistakes}</p>
            </div>
            <div className={styles.game} ref={gameRef}>
                <div className={styles.words}>
                    {textState &&
                        textState.map((word: string, index) => (
                            <div className={styles.word} key={word + index} ref={wordRef}>
                                {word.split('').map((letter: string, index: number) => (
                                    <span className={styles.letter} key={letter + index}>
                                        {letter}
                                    </span>
                                ))}
                            </div>
                        ))}
                </div>
                <div className={styles.cursor}></div>
            </div>
        </div>
    );
}
