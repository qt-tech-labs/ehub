import Constants from "../../../utils/Constants"

interface IPath { }
type ApiRoute<TRoute extends string> = { [key in TRoute]: string }
interface Path extends IPath {
    user: ApiRoute<"all" | "edit" | "delete">
    table: ApiRoute<"all" | "add" | "delete">
}
interface IError {
    message: string
    error: any
}

class AppError implements IError {
    message: string
    error: any
    constructor(message: string, error: any) {
        this.message = message
        this.error = error
    }
}

interface IResponse<T, E> {
    data?: T,
    error?: E
}

class MyResponse<T, E> implements IResponse<T, E> {
    error?: E | undefined;
    data?: T | undefined;
    constructor(data: T, error: E) {
        this.data = data
        this.error = error
    }
}

interface ISuccessResponse<T> extends IResponse<T, null> { }

interface IRest {
    get<T>(path: string): Promise<IResponse<T, IError>>
    post<T>(path: string, data: any): Promise<IResponse<T, IError>>
    delete<T>(path: string, data: any): Promise<IResponse<T, IError>>
}

class Rest implements IRest {
    private static instance: IRest
    private constructor() { }

    public static getInstance(): IRest {
        if (!this.instance) {
            this.instance = new Rest()
        }
        return this.instance
    }

    private buildPath(path: string): string {
        return Constants.BaseURL + path
    }

    async get<T>(path: string): Promise<T> {
        const fullPath = this.buildPath(path)

        const response = await fetch(fullPath)
        if (!response.ok) {
            throw new AppError("Request failed: " + response.status, response.text())
        }
        return response.json()
    }
    post<T>(path: string, data: any): Promise<IResponse<T, IError>> {
        throw new Error("Method not implemented.")
    }
    delete<T>(path: string, data: any): Promise<IResponse<T, IError>> {
        throw new Error("Method not implemented.")
    }
}


export { IResponse, IError, MyResponse, Rest }