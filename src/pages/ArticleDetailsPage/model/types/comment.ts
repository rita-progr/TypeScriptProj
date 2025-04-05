import {Comment} from "entities/Comment";
import {EntityState} from "@reduxjs/toolkit";

export interface CommentSchema extends EntityState<Comment, string | number>{
    isLoading?: boolean;
    error?: string | null;
}