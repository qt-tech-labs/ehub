import { IUser } from "../../models/IUser";
import { IAuthentication, LoginMethod } from "./fbase";

export class SelfHostedAuthentication implements IAuthentication {
    private static _instance: SelfHostedAuthentication

    public static GetInstance(): SelfHostedAuthentication {
        if (!this._instance) {
            this._instance = new SelfHostedAuthentication()
        }
        return this._instance
    }

    constructor() {
    }
    login(method: LoginMethod, data: any, onResult: (result: IUser | null, message?: string | undefined) => void): void {
        throw new Error("Method not implemented.");
    }
    signUp(email: string, pwd: string, onResult: (result: IUser | null, message?: string | undefined) => void): void {
        throw new Error("Method not implemented.");
    }
    resetPwd(email: string, onResult: (result: IUser | null, message?: string | undefined) => void): void {
        throw new Error("Method not implemented.");
    }

}