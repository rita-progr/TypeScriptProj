import {FC, lazy} from "react";
import {addNewCommentFormProps} from "./addNewCommentForm";

export const AddNewCommentFormAsync = lazy<FC<addNewCommentFormProps>>(() => import("./addNewCommentForm"));