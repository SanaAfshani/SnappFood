const TranslationConstants = Object.freeze({
    expressSending: 'ارسال اکسپرس',
    courierSeller: 'پیک فروشنده',
    free: 'رایگان',
    toman: 'تومان',
    minutes: 'دقیقه',
    until: 'تا'
});

export type TranslationKey = keyof typeof TranslationConstants;

export default TranslationConstants;
