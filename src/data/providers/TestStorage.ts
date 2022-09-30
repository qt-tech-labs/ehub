import { ILocalStorage } from "./LocalStorage";

export class TestStorage implements ILocalStorage {
    getItem(key: string) {
        throw new Error("Method not implemented.");
    }
    setItem(key: string, value: any): void {
        throw new Error("Method not implemented.");
    }

}