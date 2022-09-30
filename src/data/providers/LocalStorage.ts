export interface ILocalStorage {
    getItem(key: string): any
    setItem(key: string, value: any): void
}

export class LocalStorage implements ILocalStorage {
    private static _instance: ILocalStorage

    public static GetInstance(): ILocalStorage {
        if (!this._instance) {
            this._instance = new LocalStorage()
        }
        return this._instance
    }


    getItem(key: string) {
        const loggedInUser = localStorage.getItem(key)
        if (!loggedInUser) {
            const user = JSON.parse(loggedInUser!)
            return user
        } else {
            return null
        }
    }
    setItem(key: string, value: any): void {
        localStorage.setItem(key, value)
    }

}