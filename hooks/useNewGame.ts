import { useState } from 'react';
import { initialize } from '@paunovic/random-words';

const textGen = initialize({ countryCode: 'es' });

export const useNewGame = () => {
    const [text, setText] = useState('');

    useState(() => {
        const words = textGen.words(200);
        setText(words.join(' '));
    }, []);

    return text;
};