import { useState } from 'react';

const usePersianNumberConverter = () => {
    const persianDigits: string[] = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    const convertToPersianNumber = (input: string): string => {
        return input?.replace(/\d/g, digit => persianDigits[parseInt(digit, 10)]);
    };

    const [convertedNumber, setConvertedNumber] = useState<string>('');

    const convertAndSetNumber = (input: string): void => {
        const persianNumber: string = convertToPersianNumber(input);
        setConvertedNumber(persianNumber);
    };

    return { convertedNumber, convertAndSetNumber, convertToPersianNumber };
};

export default usePersianNumberConverter;
