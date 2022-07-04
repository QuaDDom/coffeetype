import { useEffect, useState } from 'react';
import { initialize } from '@paunovic/random-words';

const textGen = initialize({ countryCode: 'es' });

export const useNewGame = () => {
    const [text, setText] = useState<any>([]);

    useEffect(() => {
        const words = textGen.words(200);
        setText(words);
    }, []);

    return text;
};
