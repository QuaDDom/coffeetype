import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useNewGame } from '../hooks/useNewGame';
import styles from './TestWords.module.scss';

export default function TestWords() {
    const [time, setTime] = useState(30);
    const [mistakes, setMistakes] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const [currentLetter, setCurrentLetter] = useState('');

    //References
    const gameRef = useRef<HTMLInputElement>(null) as MutableRefObject<HTMLInputElement>;
    const wordRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
    const letterRef = useRef<HTMLSpanElement>(null) as MutableRefObject<HTMLSpanElement>;

    const addClass = (el: any, name: any) => {};
    const removeClass = () => {};

    const evaluateWord = (word: string) => {
        const characters = text.map((word) => word.split(''));
    };

    const handleKeyUp = (e: any) => {
        const letter = e.key;
        let currentIndex = 0;

        const letterDom = document.getElementsByClassName('letter');

        const characters = text.map((word) => word.split(''));
        const word = characters[wordIndex];

        console.log(letter);

        const correct = word[charIndex] === letter;
        const isLetter = letter.length === 1 && letter !== ' ';

        if (letter === ' ') {
            setWordIndex(wordIndex + 1);
            return;
        } else if (letter === 'Backspace') {
            if (wordIndex >= 1) setWordIndex(wordIndex - 1);
        }

        if (isLetter) {
            if (correct) {
                console.log('correct');
                if (word.length - 1 < currentIndex) {
                    currentIndex = 0;
                    return;
                }
                letterDom[charIndex].classList.add(styles.correct);
            } else {
                console.log('incorrect');
                if (word.length - 1 < currentIndex) {
                    currentIndex = 0;
                    return;
                }
                letterDom[charIndex].classList.add(styles.incorrect);
            }
        }

        currentIndex++;
        setCharIndex(charIndex + 1);
        letterDom[charIndex].classList.add(styles.active);
    };

    useEffect(() => {
        gameRef.current.focus();
    }, [gameRef, wordRef, letterRef]);

    const text: [string] = useNewGame({ setTime, setCharIndex, setWordIndex });

    return (
        <div className={styles.containerWords}>
            <div className={styles.stats}>
                <p>{time}</p>
                <p>WPM: {speed}</p>
                <p>Mistakes: {mistakes}</p>
            </div>
            <div className={styles.game} onKeyUp={handleKeyUp} ref={gameRef} tabIndex={0}>
                <div className={styles.words}>
                    {text &&
                        text.map((word: string, index) => (
                            <div className={styles.word} key={word + index} ref={wordRef}>
                                {word.split('').map((letter: string, index: number) => (
                                    <span
                                        className={`${styles.letter} letter`}
                                        key={letter + index}
                                        ref={letterRef}>
                                        {letter}
                                    </span>
                                ))}
                            </div>
                        ))}
                </div>
                <div
                    className={styles.cursor}
                    style={{
                        position: 'absolute',
                        // top: charIndex >= 2 ? wordIndex * 30 + 'px' : '55px',
                        left: charIndex >= 1 ? charIndex * 17.5 + 'px' : '3px'
                    }}></div>
            </div>
        </div>
    );
}
