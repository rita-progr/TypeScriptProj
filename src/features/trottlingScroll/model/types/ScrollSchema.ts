//<Адрес страницы, значение скролла>
export type ScrollSchema = Record<string, number>

export interface TrottlingSchema {
    scroll: ScrollSchema;
}
