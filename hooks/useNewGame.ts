import { useEffect, useState } from 'react';
import { initialize } from '@paunovic/random-words';

const textGen = initialize({ countryCode: 'es' });

interface Props {
    setTime: any;
    setCharIndex: any;
    setWordIndex: any;
    setCurrentCharIndex: any;
    setMistakes: any;
}

export const useNewGame = ({
    setTime,
    setCharIndex,
    setWordIndex,
    setCurrentCharIndex,
    setMistakes
}: Props) => {
    const [text, setText] = useState<any>([]);

    const startNewGame = () => {
        setTime(0);
        setCharIndex(0);
        setWordIndex(0);
        setCurrentCharIndex(0);
        setMistakes(0);
        setText(textGen.words(200));
    };

    useEffect(() => {
        const words = textGen.words(200);
        setText(words);
    }, []);

    return { text, startNewGame };
};
