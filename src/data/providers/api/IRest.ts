export interface ISuccessResponse<T> extends IResponse<T, null> { }

export interface IPath { }
type ApiRoute<TRoute extends string> = { [key in TRoute]: string }
export interface Path extends IPath {
    user: ApiRoute<"all" | "edit" | "delete">
    table: ApiRoute<"all" | "add" | "delete">
}
export interface IError {
    message: string
    error: any
}

export class AppError implements IError {
    message: string
    error: any
    constructor(message: string, error: any) {
        this.message = message
        this.error = error
    }
}

export interface IResponse<T, E> {
    data?: T,
    error?: E
}

export class MyResponse<T, E> implements IResponse<T, E> {
    error?: E | undefined;
    data?: T | undefined;
    constructor(data: T, error?: E) {
        this.data = data
        this.error = error
    }
}

interface IRest {
    get<T>(path: string): Promise<IResponse<T, IError>>
    post<T>(path: string, data: any): Promise<IResponse<T, IError>>
    delete<T>(path: string, data: any): Promise<IResponse<T, IError>>
}


export default IRest