import { useEffect, useState } from 'react';
import { initialize } from '@paunovic/random-words';

const textGen = initialize({ countryCode: 'es' });

interface Props {
    setTime: any;
    setCharIndex: any;
    setWordIndex: any;
}

export const useNewGame = ({ setTime, setCharIndex, setWordIndex }: Props) => {
    const [text, setText] = useState<any>([]);

    const startNewGame = () => {
        setTime(0);
        setCharIndex(0);
        setWordIndex(0);
        setText(textGen.words(200));
    };

    useEffect(() => {
        const words = textGen.words(200);
        setText(words);
    }, []);

    return text;
};
