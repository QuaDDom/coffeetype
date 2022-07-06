import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useNewGame } from '../hooks/useNewGame';
import RestartGame from './GameAssets/RestartGame';
import styles from './TestWords.module.scss';

export default function TestWords() {
    const [time, setTime] = useState(30);
    const [mistakes, setMistakes] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isStart, setIsStart] = useState(false);
    const [currentLetter, setCurrentLetter] = useState('');

    //References
    const gameRef = useRef<HTMLInputElement>(null) as MutableRefObject<HTMLInputElement>;
    const wordRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
    const letterRef = useRef<HTMLSpanElement>(null) as MutableRefObject<HTMLSpanElement>;

    const handleKeyUp = (e: any) => {
        setIsStart(true);
        const letter = e.key;

        const letterDom: any = document.getElementsByClassName('letter');

        const characters = text.map((word: string) => word.split(''));
        const word = characters[wordIndex];

        console.log(letter);

        const correct = word[currentCharIndex] === letter;
        const isLetter = letter.length === 1 && letter !== ' ' && letter !== 'Backspace';

        if (letter === ' ') {
            setWordIndex(wordIndex + 1);
            setCurrentCharIndex(0);
            return;
        } else if (letter === 'Backspace') {
            setCurrentCharIndex(currentCharIndex - 1);
            setCharIndex(charIndex - 1);

            letterDom[charIndex - 1].classList.remove(styles.correct, styles.incorrect);

            if (letterDom[charIndex].classList.contains(styles.incorrect)) {
                setMistakes(mistakes - 1);
            }
            return;
        } else if (isLetter) {
            console.log({ letter, expected: word[currentCharIndex] });
            if (correct) {
                console.log('correct');
                if (word.length - 1 < currentCharIndex) {
                    setCurrentCharIndex(0);
                    return;
                }
                letterDom[charIndex].classList.add(styles.correct);
            } else {
                setMistakes(mistakes + 1);
                console.log('incorrect');
                letterDom[charIndex].classList.add(styles.incorrect);
            }
            setCurrentCharIndex(currentCharIndex + 1);
            setCharIndex(charIndex + 1);
        }
    };

    useEffect(() => {
        gameRef.current.focus();
    }, [gameRef, wordRef, letterRef]);

    const { text, startNewGame }: any = useNewGame({
        setTime,
        setCharIndex,
        setWordIndex,
        setCurrentCharIndex,
        setMistakes
    });

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
                        text.map((word: string, index: number) => (
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
                        top: wordIndex >= 2 ? wordIndex * 30 + 'px' : '55px',
                        left: charIndex >= 1 ? charIndex * 17 + 'px' : '3px'
                    }}></div>
            </div>
            <RestartGame startNewGame={startNewGame} />
        </div>
    );
}
