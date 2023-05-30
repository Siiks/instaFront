import { Photos } from "./photos";
import { Settings } from "./settings";

export interface Accounts {
    id: number;
    settings: Settings;
    username: string;
    email: string;
    tlf: string;
    password: string;
    photos: Photos[];
    followers: Accounts[];
    following: Accounts[];
}
export interface RegisterRequest {
    username: string;
    tlf: string;
    email: string;
    password: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}