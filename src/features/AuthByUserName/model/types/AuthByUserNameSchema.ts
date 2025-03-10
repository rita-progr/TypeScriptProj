export interface AuthByUserNameSchema {
    username?: string;
    password?: string;
    isLoading?: boolean;
    error?: string | null;
}