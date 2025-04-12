import {CommentSchema} from "./comment";
import {ArticlesRecommendedSchema} from "./ArticleRecommendedSchema";

export interface ArticleDetailsPageSchema {
    comments?: CommentSchema
    recommended?: ArticlesRecommendedSchema
}