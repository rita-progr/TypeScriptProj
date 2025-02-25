jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key, // Мок функции перевода
        i18n: { changeLanguage: jest.fn() }, // Мок объекта i18n
    }),
}));