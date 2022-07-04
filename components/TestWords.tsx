import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useNewGame } from '../hooks/useNewGame';
import styles from './TestWords.module.scss';

export default function TestWords() {
    const [time, setTime] = useState(0);
    const [mistakes, setMistakes] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [currentLetter, setCurrentLetter] = useState('');

    //References
    const gameRef = useRef<HTMLInputElement>(null) as MutableRefObject<HTMLInputElement>;
    const wordRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
    const letterRef = useRef<HTMLSpanElement>(null) as MutableRefObject<HTMLSpanElement>;

    const addClass = (el: any, name: any) => {};
    const removeClass = () => {};

    const evaluateWord = (word: string) => {};

    const handleKeyUp = (e: any) => {
        const key = e.key;

        const correct = false;
        const isLetter = key.length === 1 && key !== ' ';

        if (isLetter) {
        }
    };

    useEffect(() => {
        gameRef?.current.focus();
        console.log(wordRef?.current);
    }, [gameRef, wordRef, letterRef]);

    const text: [string] = useNewGame();

    return (
        <div className={styles.containerWords}>
            <div className={styles.stats}>
                <p>{speed}</p>
                <p>
                    Time: <span>{time}s</span>
                </p>
                <p>Mistakes: {mistakes}</p>
            </div>
            <div className={styles.game} onKeyUp={handleKeyUp} ref={gameRef} tabIndex={0}>
                <div className={styles.words}>
                    {text &&
                        text.map((word: string, index) => (
                            <div className={styles.word} key={word + index} ref={wordRef}>
                                {word.split('').map((letter: string, index: number) => (
                                    <span
                                        className={styles.letter}
                                        key={letter + index}
                                        ref={letterRef}>
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
