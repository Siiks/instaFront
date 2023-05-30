import { Accounts } from "./user";

export interface Settings {
    id: number;
    accounts: Accounts; 
    private_account: boolean;
    notifications: boolean;
    ads: boolean;
}