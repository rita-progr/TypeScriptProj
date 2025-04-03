export interface ArticleSchema {
    isLoading: boolean;
    error: string|null;
    data: Article | undefined;
}

export enum ArticleBlockType{
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export interface ArticleBlocksCommon {
    id:string;
    type:ArticleBlockType;
    title?:string;
}

export interface ArticleIMAGEBlocks extends ArticleBlocksCommon {
    type: ArticleBlockType.IMAGE;
    src:string;
}

export interface ArticleTEXTBlocks extends ArticleBlocksCommon  {
    type: ArticleBlockType.TEXT;
    paragraphs: string[]
}

export interface ArticleCODEBlocks extends ArticleBlocksCommon {
    type: ArticleBlockType.CODE;
    code: string;
}

export enum ArticleType {
    IT='IT',
    SCIENCE='SCIENCE',
    ECONOMICS='ECONOMICS',
}

export type ArticleBlocks = ArticleIMAGEBlocks| ArticleTEXTBlocks| ArticleCODEBlocks;

export interface Article {
    id:string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlocks[]
}